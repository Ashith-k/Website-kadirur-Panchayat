/**
 * ===================================================================
 * PONNYATHANKAM & KADIRUR WEBGIS HERITAGE EXTENSION
 * Modular GIS controller for Heritage Feature Search, Attribute Filtering,
 * Quick-Zoom Navigation, Opacity Controls, and Metadata Attribution.
 * Designed for Kadirur Grama Panchayat Spatial Information System.
 * ===================================================================
 */

(function () {
  'use strict';

  function initHeritageAddon() {
    if (typeof map === 'undefined') {
      setTimeout(initHeritageAddon, 150);
      return;
    }

    var searchInput = document.getElementById('heritage-search-input');
    var resultsList = document.getElementById('heritage-search-results');
    var categoryFilter = document.getElementById('heritage-category-filter');
    var clearBtn = document.getElementById('heritage-search-clear');
    var metaBtn = document.getElementById('heritage-meta-btn');
    var metaModal = document.getElementById('heritage-meta-modal');
    var metaClose = document.getElementById('heritage-meta-close');
    var opacitySlider = document.getElementById('heritage-opacity-slider');
    var opacityVal = document.getElementById('heritage-opacity-val');

    // Build searchable index of features
    var searchableFeatures = [];

    // 1. Ponnyathankam Cultural Heritage Sites
    if (typeof json_PONNYATHANKAM_18 !== 'undefined' && json_PONNYATHANKAM_18.features) {
      json_PONNYATHANKAM_18.features.forEach(function (f) {
        var p = f.properties || {};
        var geom = f.geometry || {};
        var coords = geom.coordinates;
        var center3857 = null;

        if (geom.type === 'Point') {
          center3857 = ol.proj.fromLonLat(coords);
        } else if (geom.type === 'Polygon') {
          var ring = coords[0];
          var avgLon = 0, avgLat = 0;
          for (var i = 0; i < ring.length; i++) {
            avgLon += ring[i][0];
            avgLat += ring[i][1];
          }
          center3857 = ol.proj.fromLonLat([avgLon / ring.length, avgLat / ring.length]);
        }

        searchableFeatures.push({
          id: p.id,
          name: p.name || 'Unnamed Heritage Site',
          malayalam: p.malayalam_name || '',
          category: 'Ponnyathankam Heritage',
          subCategory: p.category || 'Cultural Site',
          ward: p.ward_name || '',
          description: p.description || '',
          photo: p.photo || '',
          url: p.source_url || '',
          center: center3857,
          zoom: geom.type === 'Polygon' ? 17 : 18,
          layerName: 'lyr_PONNYATHANKAM_18',
          rawFeature: f
        });
      });
    }

    // 2. Historic Duel March Route
    if (typeof json_PONNYATHANKAM_ROUTE_19 !== 'undefined' && json_PONNYATHANKAM_ROUTE_19.features) {
      json_PONNYATHANKAM_ROUTE_19.features.forEach(function (f) {
        var p = f.properties || {};
        searchableFeatures.push({
          id: 'route-19',
          name: p.name || 'Historic Duel March Route',
          malayalam: p.malayalam_name || '',
          category: 'Historic Duel Route',
          subCategory: 'Folklore March Path',
          ward: 'Vatakara to Kadirur',
          description: p.description || '',
          photo: '',
          url: p.source_url || '',
          center: ol.proj.fromLonLat([75.565, 11.690]),
          zoom: 12,
          layerName: 'lyr_PONNYATHANKAM_ROUTE_19',
          rawFeature: f
        });
      });
    }

    // 3. Kadirur Electoral Wards
    if (typeof json_KADIRURWARD_17 !== 'undefined' && json_KADIRURWARD_17.features) {
      json_KADIRURWARD_17.features.forEach(function (f) {
        var p = f.properties || {};
        var geom = f.geometry || {};
        var center3857 = null;

        if (geom.coordinates && geom.coordinates[0]) {
          var ring = geom.type === 'MultiPolygon' ? geom.coordinates[0][0] : geom.coordinates[0];
          if (ring && ring.length > 0) {
            var sumLon = 0, sumLat = 0;
            for (var k = 0; k < ring.length; k++) {
              sumLon += ring[k][0];
              sumLat += ring[k][1];
            }
            center3857 = ol.proj.fromLonLat([sumLon / ring.length, sumLat / ring.length]);
          }
        }

        searchableFeatures.push({
          id: 'ward-' + (p.Ward_No || ''),
          name: 'Ward ' + (p.Ward_No || '') + ': ' + (p.Ward_Name || ''),
          malayalam: '',
          category: 'Kadirur Wards',
          subCategory: 'Electoral Ward',
          ward: p.Ward_Name || '',
          description: 'Kadirur Grama Panchayat Ward No. ' + (p.Ward_No || ''),
          center: center3857,
          zoom: 15,
          layerName: 'lyr_KADIRURWARD_17',
          rawFeature: f
        });
      });
    }

    // 4. Schools
    if (typeof json_SCHOOL_15 !== 'undefined' && json_SCHOOL_15.features) {
      json_SCHOOL_15.features.forEach(function (f) {
        var p = f.properties || {};
        var geom = f.geometry || {};
        if (geom.coordinates) {
          searchableFeatures.push({
            id: 'school-' + (p.osm_id || p.fid),
            name: p.schoolname || 'School',
            malayalam: '',
            category: 'Schools & Education',
            subCategory: 'Educational Institution',
            ward: 'Kadirur',
            description: 'Educational institution in Kadirur Grama Panchayat',
            center: ol.proj.fromLonLat(geom.coordinates),
            zoom: 17,
            layerName: 'lyr_SCHOOL_15',
            rawFeature: f
          });
        }
      });
    }

    // Function to render search results
    function renderResults(query, catFilter) {
      if (!resultsList) return;
      resultsList.innerHTML = '';

      var cleanQ = (query || '').toLowerCase().trim();
      var selectedCat = catFilter || 'ALL';

      if (cleanQ.length === 0 && selectedCat === 'ALL') {
        resultsList.style.display = 'none';
        return;
      }

      var matches = searchableFeatures.filter(function (item) {
        var matchCat = (selectedCat === 'ALL' || item.category === selectedCat);
        if (!matchCat) return false;

        if (cleanQ.length === 0) return true; // Category browse

        var text = (item.name + ' ' + item.malayalam + ' ' + item.subCategory + ' ' + item.ward + ' ' + item.description).toLowerCase();
        return text.indexOf(cleanQ) !== -1;
      });

      if (matches.length === 0) {
        var emptyItem = document.createElement('div');
        emptyItem.className = 'heritage-search-item empty-state';
        emptyItem.textContent = 'No matching heritage features found';
        resultsList.appendChild(emptyItem);
        resultsList.style.display = 'block';
        return;
      }

      var maxShow = Math.min(matches.length, 12);
      for (var i = 0; i < maxShow; i++) {
        var item = matches[i];
        var el = document.createElement('div');
        el.className = 'heritage-search-item';
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');

        var badgeClass = 'badge-heritage';
        if (item.category === 'Kadirur Wards') badgeClass = 'badge-ward';
        if (item.category === 'Schools & Education') badgeClass = 'badge-school';
        if (item.category === 'Historic Duel Route') badgeClass = 'badge-route';

        el.innerHTML = `
          <div class="search-item-header">
            <span class="search-item-title">${item.name}</span>
            <span class="search-item-badge ${badgeClass}">${item.subCategory}</span>
          </div>
          ${item.malayalam ? `<div class="search-item-malayalam">${item.malayalam}</div>` : ''}
          <div class="search-item-meta">${item.ward ? '📍 ' + item.ward : ''}</div>
        `;

        (function (matchItem) {
          el.addEventListener('click', function () {
            zoomToItem(matchItem);
            resultsList.style.display = 'none';
          });
          el.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
              zoomToItem(matchItem);
              resultsList.style.display = 'none';
            }
          });
        })(item);

        resultsList.appendChild(el);
      }

      resultsList.style.display = 'block';
    }

    // Zoom and highlight selected item
    function zoomToItem(item) {
      if (!item || !item.center) return;

      map.getView().animate({
        center: item.center,
        zoom: item.zoom || 17,
        duration: 900
      });

      // Show popup for Ponnyathankam layer features
      if (typeof container !== 'undefined' && typeof content !== 'undefined' && typeof overlayPopup !== 'undefined') {
        var popupHtml = `
          <div class="heritage-custom-popup">
            <div class="popup-header-tag">PONNYATHANKAM CULTURAL HERITAGE</div>
            <h4>${item.name}</h4>
            ${item.malayalam ? `<div class="popup-sub-tag">${item.malayalam}</div>` : ''}
            <div class="popup-desc">${item.description}</div>
            ${item.photo ? `<div class="popup-img-wrap"><img src="images/${item.photo}" alt="${item.name}" class="popup-feature-img" /></div>` : ''}
            <div class="popup-attr-table">
              ${item.ward ? `<div><strong>Ward:</strong> ${item.ward}</div>` : ''}
              <div><strong>Category:</strong> ${item.subCategory}</div>
              <div><strong>Source:</strong> <a href="${item.url || 'https://ponnyathankam.com/'}" target="_blank" rel="noopener">ponnyathankam.com</a></div>
            </div>
          </div>
        `;
        content.innerHTML = popupHtml;
        container.style.display = 'block';
        overlayPopup.setPosition(item.center);
      }
    }

    // Input event listeners
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = searchInput.value;
        var cat = categoryFilter ? categoryFilter.value : 'ALL';
        renderResults(q, cat);
      });
      searchInput.addEventListener('focus', function () {
        var q = searchInput.value;
        var cat = categoryFilter ? categoryFilter.value : 'ALL';
        if (q.length > 0 || cat !== 'ALL') {
          renderResults(q, cat);
        }
      });
    }

    if (categoryFilter) {
      categoryFilter.addEventListener('change', function () {
        var q = searchInput ? searchInput.value : '';
        renderResults(q, categoryFilter.value);
      });
    }

    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        if (categoryFilter) categoryFilter.value = 'ALL';
        if (resultsList) resultsList.style.display = 'none';
      });
    }

    // Close results when clicking outside
    document.addEventListener('click', function (e) {
      var bar = document.getElementById('heritage-control-bar');
      if (bar && !bar.contains(e.target) && resultsList) {
        resultsList.style.display = 'none';
      }
    });

    // Preset quick buttons
    var presetBtns = document.querySelectorAll('.heritage-preset-btn');
    presetBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-target');
        if (target === 'ankathattu') {
          var ank = searchableFeatures.find(function (f) { return f.id === 1; });
          if (ank) zoomToItem(ank);
        } else if (target === 'ezharakandam') {
          var ezh = searchableFeatures.find(function (f) { return f.id === 2; });
          if (ezh) zoomToItem(ezh);
        } else if (target === 'route') {
          var rt = searchableFeatures.find(function (f) { return f.id === 'route-19'; });
          if (rt) zoomToItem(rt);
        } else if (target === 'kadirur') {
          map.getView().animate({
            center: [8408162.29, 1320570.62],
            zoom: 14,
            duration: 800
          });
        }
      });
    });

    // Opacity Slider
    if (opacitySlider && typeof lyr_PONNYATHANKAM_18 !== 'undefined') {
      opacitySlider.addEventListener('input', function () {
        var val = parseFloat(opacitySlider.value);
        if (typeof lyr_PONNYATHANKAM_18 !== 'undefined') lyr_PONNYATHANKAM_18.setOpacity(val);
        if (typeof lyr_PONNYATHANKAM_ROUTE_19 !== 'undefined') lyr_PONNYATHANKAM_ROUTE_19.setOpacity(val);
        if (opacityVal) opacityVal.textContent = Math.round(val * 100) + '%';
      });
    }

    // Metadata Modal
    if (metaBtn && metaModal) {
      metaBtn.addEventListener('click', function () {
        metaModal.style.display = 'flex';
      });
    }
    if (metaClose && metaModal) {
      metaClose.addEventListener('click', function () {
        metaModal.style.display = 'none';
      });
    }
    if (metaModal) {
      metaModal.addEventListener('click', function (e) {
        if (e.target === metaModal) {
          metaModal.style.display = 'none';
        }
      });
    }

    console.log('[Ponnyathankam WebGIS Addon] Initialized with ' + searchableFeatures.length + ' searchable features.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeritageAddon);
  } else {
    initHeritageAddon();
  }
})();
