<template>
    <section class="admin container-fluid ">
        <admin-navbar></admin-navbar>
        <admin-sidebar></admin-sidebar>

        <div class="content-wrapper">
            <br><br><br>

            <div class="callout callout-info">
                <h4>Tip!</h4>

                <p>Add the sidebar-collapse class to the body tag to get this layout. You should combine this option with a
                fixed layout if you have a long sidebar. Doing that will prevent your page content from getting stretched
                vertically.</p>
            </div>

            <div class="info-box bg-yellow">
            <span class="info-box-icon"><i class="fas fa-dollar-sign"></i></span>

            <div class="info-box-content">
              <span class="info-box-text">Inventory</span>
              <span class="info-box-number">5,200</span>

              <div class="progress">
                <div class="progress-bar" style="width: 50%"></div>
              </div>
              <span class="progress-description">
                    50% Increase in 30 Days
                  </span>
            </div>
            <!-- /.info-box-content -->
          </div>
        </div>
    </section>
</template>

<style type="text/css">
    .container-fluid {
        padding: 0;
    }
</style>

<script type="text/javascript">
import NavbarComponent from '../navbar/NavbarComponent.vue';
import SidebarComponent from '../sidebar/SidebarComponent.vue';

export default {
    components: {
        'admin-navbar': NavbarComponent,
        'admin-sidebar': SidebarComponent
    },
    computed : {
    }
}
</script>