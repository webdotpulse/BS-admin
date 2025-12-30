(function() {
  "use strict"; // Start of use strict

  var sidebar = document.querySelector('.sidebar');
  var sidebarToggles = document.querySelectorAll('#sidebarToggle, #sidebarToggleTop');

  if (sidebar) {
    
    // Initialize all collapses in the sidebar
    var collapseElements = sidebar.querySelectorAll('.collapse');
    collapseElements.forEach(function(collapseEl) {
       // Check if already initialized to avoid double initialization or errors, although Bootstrap handles this safely usually.
       // However, we strictly don't need to manually initialize them if data-bs-toggle is used, but for programmatic access later (hide),
       // it's good to ensure they are tracked. But Bootstrap 5 'getInstance' returns null if not initialized.
       // We can just rely on 'getOrCreateInstance' if available or just check existence.
       // The original code was only initializing the first one which was incomplete.
       // We will remove the explicit initialization variable as it's not reused directly,
       // and let Bootstrap handle it via data attributes or on-demand.
    });

    sidebarToggles.forEach(function(toggle) {
      toggle.addEventListener('click', function(e) {
        document.body.classList.toggle('sidebar-toggled');
        sidebar.classList.toggle('toggled');

        if (sidebar.classList.contains('toggled')) {
           var collapses = sidebar.querySelectorAll('.collapse');
           collapses.forEach(function(collapse) {
             var bsCollapse = bootstrap.Collapse.getInstance(collapse);
             if (bsCollapse) {
               bsCollapse.hide();
             }
           });
        };
      });
    });

    // Close any open menu accordions when window is resized below 768px
    window.addEventListener('resize', function() {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

      if (vw < 768) {
         var collapses = sidebar.querySelectorAll('.collapse');
         collapses.forEach(function(collapse) {
           var bsCollapse = bootstrap.Collapse.getInstance(collapse);
           if (bsCollapse) {
             bsCollapse.hide();
           }
         });
      };

      // Toggle the side navigation when window is resized below 480px
      if (vw < 480 && !sidebar.classList.contains('toggled')) {
        document.body.classList.add('sidebar-toggled');
        sidebar.classList.add('toggled');
         var collapses = sidebar.querySelectorAll('.collapse');
         collapses.forEach(function(collapse) {
           var bsCollapse = bootstrap.Collapse.getInstance(collapse);
           if (bsCollapse) {
             bsCollapse.hide();
           }
         });
      };
    });
  }

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  var fixedNavSidebar = document.querySelector('body.fixed-nav .sidebar');
  if (fixedNavSidebar) {
    fixedNavSidebar.addEventListener('wheel', function(e) {
      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if (vw > 768) {
        var delta = e.wheelDelta || -e.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  }

  // Scroll to top button appear
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;
      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  // Smooth scrolling
  var scrollLinks = document.querySelectorAll('a.scroll-to-top');
  scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

})(); // End of use strict
