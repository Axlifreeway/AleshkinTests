/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 20.0, "series": [{"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[600.0, 3.0], [300.0, 1.0], [700.0, 4.0], [400.0, 4.0], [800.0, 1.0], [900.0, 1.0], [500.0, 3.0], [1000.0, 3.0]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[300.0, 5.0], [400.0, 11.0], [500.0, 4.0]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[600.0, 2.0], [300.0, 2.0], [400.0, 14.0], [500.0, 2.0]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[300.0, 17.0], [200.0, 3.0]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[600.0, 1.0], [700.0, 1.0], [400.0, 1.0], [500.0, 17.0]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1100.0, 1.0], [700.0, 9.0], [800.0, 7.0], [900.0, 3.0]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[0.0, 14.0], [100.0, 6.0]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[600.0, 7.0], [700.0, 3.0], [900.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[600.0, 6.0], [700.0, 2.0], [400.0, 2.0], [500.0, 9.0], [1000.0, 1.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[600.0, 2.0], [700.0, 15.0], [800.0, 1.0], [900.0, 2.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[300.0, 2.0], [200.0, 18.0]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[100.0, 20.0]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[0.0, 2.0], [100.0, 17.0], [200.0, 1.0]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[0.0, 11.0], [100.0, 9.0]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[0.0, 14.0], [100.0, 6.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[0.0, 17.0], [100.0, 3.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[0.0, 7.0], [100.0, 13.0]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[200.0, 20.0]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[0.0, 16.0], [100.0, 4.0]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[0.0, 15.0], [100.0, 5.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[600.0, 3.0], [700.0, 2.0], [400.0, 1.0], [500.0, 14.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[0.0, 18.0], [100.0, 2.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1100.0, 4.0], [1200.0, 3.0], [1300.0, 1.0], [800.0, 1.0], [900.0, 8.0], [1000.0, 3.0]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1100.0, 8.0], [1200.0, 1.0], [800.0, 1.0], [900.0, 3.0], [1000.0, 7.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[300.0, 2.0], [600.0, 3.0], [400.0, 9.0], [900.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[0.0, 17.0], [100.0, 3.0]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[0.0, 3.0], [100.0, 17.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[300.0, 19.0], [400.0, 1.0]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[0.0, 19.0], [100.0, 1.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1100.0, 3.0], [1200.0, 1.0], [1300.0, 3.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 8.0], [1700.0, 1.0], [1800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[0.0, 20.0]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3492.0, "series": [{"data": [[0.0, 3492.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 197.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 140.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 19.721902017291058, "minX": 1.70231268E12, "maxY": 20.0, "series": [{"data": [[1.70231268E12, 20.0], [1.70231274E12, 19.721902017291058]], "isOverall": false, "label": "Autotests20", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231274E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 83.0, "minX": 1.0, "maxY": 1503.8, "series": [{"data": [[20.0, 86.8]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[20.0, 86.8]], "isOverall": false, "label": "/js/basket.min.js-46-Aggregated", "isController": false}, {"data": [[20.0, 87.05]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[20.0, 87.05]], "isOverall": false, "label": "/js/search.min.js-98-Aggregated", "isController": false}, {"data": [[19.0, 94.0], [20.0, 87.94736842105263]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[19.95, 88.25]], "isOverall": false, "label": "/js/orderModel.min.js-177-Aggregated", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/css/loader.css-14-Aggregated", "isController": false}, {"data": [[20.0, 86.75]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[20.0, 86.75]], "isOverall": false, "label": "/css/checkout-modals.css-127-Aggregated", "isController": false}, {"data": [[20.0, 88.7]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[20.0, 88.7]], "isOverall": false, "label": "/images/btn-location.svg-138-Aggregated", "isController": false}, {"data": [[20.0, 87.4]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[20.0, 87.4]], "isOverall": false, "label": "/css/filters.css-57-Aggregated", "isController": false}, {"data": [[20.0, 88.14999999999999]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[20.0, 88.14999999999999]], "isOverall": false, "label": "/js/search.min.js-175-Aggregated", "isController": false}, {"data": [[20.0, 87.19999999999997]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[20.0, 87.19999999999997]], "isOverall": false, "label": "/css/index-page.css-155-Aggregated", "isController": false}, {"data": [[20.0, 90.05000000000003]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[20.0, 90.05000000000003]], "isOverall": false, "label": "/css/basket-page.css-83-Aggregated", "isController": false}, {"data": [[20.0, 679.8]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[20.0, 679.8]], "isOverall": false, "label": "/-1-Aggregated", "isController": false}, {"data": [[20.0, 87.25]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[20.0, 87.25]], "isOverall": false, "label": "/css/paging.css-58-Aggregated", "isController": false}, {"data": [[20.0, 86.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[20.0, 86.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85-Aggregated", "isController": false}, {"data": [[20.0, 88.94999999999997]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[20.0, 88.94999999999997]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23-Aggregated", "isController": false}, {"data": [[20.0, 87.7]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[20.0, 87.7]], "isOverall": false, "label": "/css/checkout-page.css-121-Aggregated", "isController": false}, {"data": [[20.0, 88.34999999999997]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[20.0, 88.34999999999997]], "isOverall": false, "label": "/css/product-card.css-59-Aggregated", "isController": false}, {"data": [[20.0, 88.14999999999999]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[20.0, 88.14999999999999]], "isOverall": false, "label": "/css/checkout-page.css-126-Aggregated", "isController": false}, {"data": [[20.0, 85.49999999999999]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[20.0, 85.49999999999999]], "isOverall": false, "label": "/images/emo-chortle.svg-50-Aggregated", "isController": false}, {"data": [[20.0, 85.65]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[20.0, 85.65]], "isOverall": false, "label": "/images/gen-warning.svg-118-Aggregated", "isController": false}, {"data": [[20.0, 87.25000000000001]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[20.0, 87.25000000000001]], "isOverall": false, "label": "/css/checkout-modals.css-120-Aggregated", "isController": false}, {"data": [[20.0, 86.60000000000001]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[20.0, 86.60000000000001]], "isOverall": false, "label": "/images/app-google-play-logo.png-11-Aggregated", "isController": false}, {"data": [[20.0, 87.8]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[20.0, 87.8]], "isOverall": false, "label": "/js/basket.min.js-34-Aggregated", "isController": false}, {"data": [[20.0, 85.95]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[20.0, 85.95]], "isOverall": false, "label": "/images/jcb-96.png-112-Aggregated", "isController": false}, {"data": [[20.0, 90.25]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[20.0, 90.25]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32-Aggregated", "isController": false}, {"data": [[20.0, 86.3]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[20.0, 86.3]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29-Aggregated", "isController": false}, {"data": [[20.0, 85.85]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[20.0, 85.85]], "isOverall": false, "label": "/images/mir-96.png-110-Aggregated", "isController": false}, {"data": [[20.0, 86.05000000000001]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[20.0, 86.05000000000001]], "isOverall": false, "label": "/css/catalog-item.css-42-Aggregated", "isController": false}, {"data": [[20.0, 86.84999999999998]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[20.0, 86.84999999999998]], "isOverall": false, "label": "/images/app-icon.png-52-Aggregated", "isController": false}, {"data": [[20.0, 86.54999999999998]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[20.0, 86.54999999999998]], "isOverall": false, "label": "/css/category.css-56-Aggregated", "isController": false}, {"data": [[20.0, 88.55000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[20.0, 88.55000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96-Aggregated", "isController": false}, {"data": [[20.0, 88.95]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[20.0, 88.95]], "isOverall": false, "label": "/css/common.css-168-Aggregated", "isController": false}, {"data": [[20.0, 90.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[20.0, 90.0]], "isOverall": false, "label": "/css/common.css-69-Aggregated", "isController": false}, {"data": [[20.0, 436.8500000000001]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[20.0, 436.8500000000001]], "isOverall": false, "label": "/shop/map/product/9791-104-Aggregated", "isController": false}, {"data": [[20.0, 85.85000000000001]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[20.0, 85.85000000000001]], "isOverall": false, "label": "/js/forms.min.js-114-Aggregated", "isController": false}, {"data": [[20.0, 89.45000000000003]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[20.0, 89.45000000000003]], "isOverall": false, "label": "/css/common.css-2-Aggregated", "isController": false}, {"data": [[20.0, 474.3]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[20.0, 474.3]], "isOverall": false, "label": "/-68-Aggregated", "isController": false}, {"data": [[20.0, 88.65]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[20.0, 88.65]], "isOverall": false, "label": "/css/plugins/slick.css-94-Aggregated", "isController": false}, {"data": [[20.0, 87.3]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[20.0, 87.3]], "isOverall": false, "label": "/css/order-complete.css-147-Aggregated", "isController": false}, {"data": [[20.0, 86.60000000000001]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[20.0, 86.60000000000001]], "isOverall": false, "label": "/css/catalog-page.css-55-Aggregated", "isController": false}, {"data": [[20.0, 86.90000000000002]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[20.0, 86.90000000000002]], "isOverall": false, "label": "/images/loc-point-heart.svg-48-Aggregated", "isController": false}, {"data": [[20.0, 323.49999999999994]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[20.0, 323.49999999999994]], "isOverall": false, "label": "/dostavka-107-Aggregated", "isController": false}, {"data": [[20.0, 88.65]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[20.0, 88.65]], "isOverall": false, "label": "/images/arrow_menu.svg-137-Aggregated", "isController": false}, {"data": [[20.0, 88.25]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[20.0, 88.25]], "isOverall": false, "label": "/css/catalog-item.css-5-Aggregated", "isController": false}, {"data": [[20.0, 563.55]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[20.0, 563.55]], "isOverall": false, "label": "/-151-Aggregated", "isController": false}, {"data": [[20.0, 87.4]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[20.0, 87.4]], "isOverall": false, "label": "/js/search.min.js-156-Aggregated", "isController": false}, {"data": [[20.0, 86.15]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[20.0, 86.15]], "isOverall": false, "label": "/js/indexPage.min.js-74-Aggregated", "isController": false}, {"data": [[20.0, 85.45]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[20.0, 85.45]], "isOverall": false, "label": "/css/delivery-status.css-169-Aggregated", "isController": false}, {"data": [[20.0, 85.8]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[20.0, 85.8]], "isOverall": false, "label": "/css/order-table.css-172-Aggregated", "isController": false}, {"data": [[20.0, 86.94999999999999]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[20.0, 86.94999999999999]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26-Aggregated", "isController": false}, {"data": [[20.0, 87.30000000000001]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[20.0, 87.30000000000001]], "isOverall": false, "label": "/images/slider-arrow.svg-36-Aggregated", "isController": false}, {"data": [[20.0, 86.89999999999999]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[20.0, 86.89999999999999]], "isOverall": false, "label": "/js/store.min.js-105-Aggregated", "isController": false}, {"data": [[20.0, 86.45]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[20.0, 86.45]], "isOverall": false, "label": "/images/arrow.svg-54-Aggregated", "isController": false}, {"data": [[20.0, 85.65]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[20.0, 85.65]], "isOverall": false, "label": "/images/mastercard-96.png-111-Aggregated", "isController": false}, {"data": [[20.0, 94.5]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[20.0, 94.5]], "isOverall": false, "label": "/city/get-by-ip-35-Aggregated", "isController": false}, {"data": [[20.0, 831.45]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[20.0, 831.45]], "isOverall": false, "label": "/customer-167-Aggregated", "isController": false}, {"data": [[20.0, 101.99999999999999]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[20.0, 101.99999999999999]], "isOverall": false, "label": "/customer-167-0-Aggregated", "isController": false}, {"data": [[20.0, 93.15000000000002]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[20.0, 93.15000000000002]], "isOverall": false, "label": "/customer-167-1-Aggregated", "isController": false}, {"data": [[20.0, 87.24999999999999]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[20.0, 87.24999999999999]], "isOverall": false, "label": "/css/cabinet.css-173-Aggregated", "isController": false}, {"data": [[20.0, 86.19999999999999]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[20.0, 86.19999999999999]], "isOverall": false, "label": "/css/static-page.css-108-Aggregated", "isController": false}, {"data": [[20.0, 636.1]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[20.0, 636.1]], "isOverall": false, "label": "/customer-167-2-Aggregated", "isController": false}, {"data": [[20.0, 85.65]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[20.0, 85.65]], "isOverall": false, "label": "/css/plugins/slick.css-41-Aggregated", "isController": false}, {"data": [[20.0, 87.85]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[20.0, 87.85]], "isOverall": false, "label": "/images/present-bg.svg-101-Aggregated", "isController": false}, {"data": [[20.0, 86.2]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[20.0, 86.2]], "isOverall": false, "label": "/images/modal-close.svg-106-Aggregated", "isController": false}, {"data": [[20.0, 87.35]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[20.0, 87.35]], "isOverall": false, "label": "/css/filters.css-162-Aggregated", "isController": false}, {"data": [[8.0, 86.0], [2.0, 97.0], [9.0, 87.0], [10.0, 85.0], [12.0, 85.5], [3.0, 85.0], [13.0, 84.0], [14.0, 86.0], [15.0, 88.0], [16.0, 86.0], [4.0, 84.0], [1.0, 92.0], [17.0, 85.0], [18.0, 84.0], [19.0, 86.0], [20.0, 86.0], [5.0, 87.0], [6.0, 84.0], [7.0, 87.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[10.549999999999999, 86.49999999999999]], "isOverall": false, "label": "/js/orderModel.min.js-183-Aggregated", "isController": false}, {"data": [[20.0, 86.55]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[20.0, 86.55]], "isOverall": false, "label": "/images/close-modal.svg-119-Aggregated", "isController": false}, {"data": [[20.0, 86.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[20.0, 86.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25-Aggregated", "isController": false}, {"data": [[20.0, 86.60000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[20.0, 86.60000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125-Aggregated", "isController": false}, {"data": [[20.0, 86.30000000000001]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[20.0, 86.30000000000001]], "isOverall": false, "label": "/images/app-apple-logo.png-10-Aggregated", "isController": false}, {"data": [[20.0, 91.20000000000002]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[20.0, 91.20000000000002]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8-Aggregated", "isController": false}, {"data": [[20.0, 86.15]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[20.0, 86.15]], "isOverall": false, "label": "/images/close-modal-w.svg-65-Aggregated", "isController": false}, {"data": [[8.0, 86.0], [1.0, 91.0], [17.0, 88.0], [19.0, 84.0], [20.0, 84.0], [12.0, 83.0], [3.0, 92.0], [13.0, 86.6], [14.0, 86.0], [15.0, 85.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[13.449999999999998, 85.79999999999998]], "isOverall": false, "label": "/css/cabinet.css-181-Aggregated", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37-Aggregated", "isController": false}, {"data": [[20.0, 87.39999999999998]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[20.0, 87.39999999999998]], "isOverall": false, "label": "/images/app-huawei-logo.png-15-Aggregated", "isController": false}, {"data": [[20.0, 612.4999999999999]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[20.0, 612.4999999999999]], "isOverall": false, "label": "/site/login-38-Aggregated", "isController": false}, {"data": [[2.0, 788.0], [9.0, 744.0], [19.0, 864.5], [20.0, 781.0], [13.0, 672.0], [14.0, 767.4], [15.0, 749.2]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[15.349999999999998, 771.05]], "isOverall": false, "label": "/customer/order-179-Aggregated", "isController": false}, {"data": [[20.0, 90.5]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[20.0, 90.5]], "isOverall": false, "label": "/css/common.css-40-Aggregated", "isController": false}, {"data": [[20.0, 86.6]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[20.0, 86.6]], "isOverall": false, "label": "/images/visa-96.png-109-Aggregated", "isController": false}, {"data": [[20.0, 86.84999999999998]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[20.0, 86.84999999999998]], "isOverall": false, "label": "/css/plugins/slick.css-3-Aggregated", "isController": false}, {"data": [[20.0, 86.9]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[20.0, 86.9]], "isOverall": false, "label": "/css/category.css-78-Aggregated", "isController": false}, {"data": [[20.0, 86.45000000000002]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[20.0, 86.45000000000002]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24-Aggregated", "isController": false}, {"data": [[20.0, 270.15]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[20.0, 270.15]], "isOverall": false, "label": "/js/forms.min.js-100-Aggregated", "isController": false}, {"data": [[20.0, 89.65]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[20.0, 89.65]], "isOverall": false, "label": "/css/common.css-146-Aggregated", "isController": false}, {"data": [[17.0, 92.0], [19.0, 92.0], [20.0, 84.94444444444444]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[19.799999999999997, 85.64999999999999]], "isOverall": false, "label": "/js/forms.min.js-178-Aggregated", "isController": false}, {"data": [[20.0, 88.69999999999999]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[20.0, 88.69999999999999]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22-Aggregated", "isController": false}, {"data": [[20.0, 92.39999999999999]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[20.0, 92.39999999999999]], "isOverall": false, "label": "/css/common.css-153-Aggregated", "isController": false}, {"data": [[20.0, 87.40000000000002]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[20.0, 87.40000000000002]], "isOverall": false, "label": "/js/catalogItem.min.js-97-Aggregated", "isController": false}, {"data": [[20.0, 117.6]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[20.0, 117.6]], "isOverall": false, "label": "/order/index-144-Aggregated", "isController": false}, {"data": [[20.0, 86.2]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[20.0, 86.2]], "isOverall": false, "label": "/css/index-page.css-43-Aggregated", "isController": false}, {"data": [[20.0, 165.29999999999998]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[20.0, 165.29999999999998]], "isOverall": false, "label": "/images/app-modal-phone.png-16-Aggregated", "isController": false}, {"data": [[20.0, 86.5]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[20.0, 86.5]], "isOverall": false, "label": "/css/catalog-page.css-77-Aggregated", "isController": false}, {"data": [[20.0, 88.35]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[20.0, 88.35]], "isOverall": false, "label": "/css/paging.css-163-Aggregated", "isController": false}, {"data": [[20.0, 88.94999999999999]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[20.0, 88.94999999999999]], "isOverall": false, "label": "/css/product-card.css-95-Aggregated", "isController": false}, {"data": [[20.0, 87.55000000000001]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[20.0, 87.55000000000001]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13-Aggregated", "isController": false}, {"data": [[20.0, 85.85]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[20.0, 85.85]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27-Aggregated", "isController": false}, {"data": [[20.0, 86.05]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[20.0, 86.05]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49-Aggregated", "isController": false}, {"data": [[20.0, 86.95]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[20.0, 86.95]], "isOverall": false, "label": "/js/search.min.js-131-Aggregated", "isController": false}, {"data": [[20.0, 90.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[20.0, 90.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60-Aggregated", "isController": false}, {"data": [[20.0, 92.60000000000001]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[20.0, 92.60000000000001]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142-Aggregated", "isController": false}, {"data": [[20.0, 86.5]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[20.0, 86.5]], "isOverall": false, "label": "/js/forms.min.js-51-Aggregated", "isController": false}, {"data": [[20.0, 88.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[20.0, 88.0]], "isOverall": false, "label": "/css/catalog-item.css-70-Aggregated", "isController": false}, {"data": [[20.0, 85.10000000000001]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[20.0, 85.10000000000001]], "isOverall": false, "label": "/images/delivery-icon.svg-90-Aggregated", "isController": false}, {"data": [[20.0, 86.45]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[20.0, 86.45]], "isOverall": false, "label": "/js/indexPage.min.js-157-Aggregated", "isController": false}, {"data": [[20.0, 86.09999999999998]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[20.0, 86.09999999999998]], "isOverall": false, "label": "/css/paging.css-170-Aggregated", "isController": false}, {"data": [[20.0, 87.25]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[20.0, 87.25]], "isOverall": false, "label": "/css/index-page.css-4-Aggregated", "isController": false}, {"data": [[20.0, 99.95000000000002]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[20.0, 99.95000000000002]], "isOverall": false, "label": "/order-123-0-Aggregated", "isController": false}, {"data": [[20.0, 87.10000000000001]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[20.0, 87.10000000000001]], "isOverall": false, "label": "/js/search.min.js-44-Aggregated", "isController": false}, {"data": [[20.0, 95.7]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[20.0, 95.7]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64-Aggregated", "isController": false}, {"data": [[20.0, 88.44999999999999]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[20.0, 88.44999999999999]], "isOverall": false, "label": "/images/counter-minus.svg-103-Aggregated", "isController": false}, {"data": [[20.0, 86.85]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[20.0, 86.85]], "isOverall": false, "label": "/js/search.min.js-148-Aggregated", "isController": false}, {"data": [[20.0, 90.69999999999999]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[20.0, 90.69999999999999]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53-Aggregated", "isController": false}, {"data": [[16.0, 84.0], [1.0, 89.0], [19.0, 87.66666666666667], [20.0, 87.66666666666667], [12.0, 84.0], [6.0, 93.0], [13.0, 85.0], [14.0, 84.0], [15.0, 85.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[14.500000000000002, 86.09999999999998]], "isOverall": false, "label": "/css/order-information.css-182-Aggregated", "isController": false}, {"data": [[20.0, 86.6]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[20.0, 86.6]], "isOverall": false, "label": "/css/plugins/slick.css-152-Aggregated", "isController": false}, {"data": [[20.0, 86.94999999999999]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[20.0, 86.94999999999999]], "isOverall": false, "label": "/js/orderModel.min.js-128-Aggregated", "isController": false}, {"data": [[20.0, 86.60000000000002]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[20.0, 86.60000000000002]], "isOverall": false, "label": "/js/basket.min.js-75-Aggregated", "isController": false}, {"data": [[20.0, 86.49999999999999]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[20.0, 86.49999999999999]], "isOverall": false, "label": "/css/category.css-161-Aggregated", "isController": false}, {"data": [[20.0, 90.45]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[20.0, 90.45]], "isOverall": false, "label": "/css/paging.css-80-Aggregated", "isController": false}, {"data": [[20.0, 266.15000000000003]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[20.0, 266.15000000000003]], "isOverall": false, "label": "/order-123-1-Aggregated", "isController": false}, {"data": [[20.0, 89.69999999999999]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[20.0, 89.69999999999999]], "isOverall": false, "label": "/css/common.css-124-Aggregated", "isController": false}, {"data": [[20.0, 86.4]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[20.0, 86.4]], "isOverall": false, "label": "/images/search-icon.svg-19-Aggregated", "isController": false}, {"data": [[20.0, 92.04999999999998]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[20.0, 92.04999999999998]], "isOverall": false, "label": "/basket/recalculate-basket-122-Aggregated", "isController": false}, {"data": [[20.0, 102.25000000000001]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[20.0, 102.25000000000001]], "isOverall": false, "label": "/site/login-62-Aggregated", "isController": false}, {"data": [[20.0, 86.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[20.0, 86.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-159-Aggregated", "isController": false}, {"data": [[20.0, 86.95]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[20.0, 86.95]], "isOverall": false, "label": "/css/jquery.fias.min.css-129-Aggregated", "isController": false}, {"data": [[20.0, 87.6]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[20.0, 87.6]], "isOverall": false, "label": "/fonts/graphik.css-12-Aggregated", "isController": false}, {"data": [[20.0, 91.15]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[20.0, 91.15]], "isOverall": false, "label": "/site/login-67-Aggregated", "isController": false}, {"data": [[8.0, 86.0], [2.0, 98.0], [1.0, 92.0], [18.0, 85.0], [19.0, 85.33333333333333], [20.0, 85.0], [10.0, 85.0], [12.0, 87.0], [6.0, 89.0], [13.0, 85.25], [14.0, 84.0], [15.0, 83.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[12.15, 86.5]], "isOverall": false, "label": "/css/basket-table.css-180-Aggregated", "isController": false}, {"data": [[20.0, 86.2]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[20.0, 86.2]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86-Aggregated", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/js/basket.min.js-158-Aggregated", "isController": false}, {"data": [[20.0, 86.50000000000001]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[20.0, 86.50000000000001]], "isOverall": false, "label": "/images/basket-icon.svg-20-Aggregated", "isController": false}, {"data": [[20.0, 88.35000000000002]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[20.0, 88.35000000000002]], "isOverall": false, "label": "/images/favicon.ico-66-Aggregated", "isController": false}, {"data": [[20.0, 88.1]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[20.0, 88.1]], "isOverall": false, "label": "/css/images/fias-spinner.png-141-Aggregated", "isController": false}, {"data": [[20.0, 87.90000000000002]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[20.0, 87.90000000000002]], "isOverall": false, "label": "/css/basket-page.css-102-Aggregated", "isController": false}, {"data": [[20.0, 91.20000000000002]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[20.0, 91.20000000000002]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136-Aggregated", "isController": false}, {"data": [[20.0, 85.85]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[20.0, 85.85]], "isOverall": false, "label": "/images/sho-basket-love.svg-47-Aggregated", "isController": false}, {"data": [[20.0, 85.9]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[20.0, 85.9]], "isOverall": false, "label": "/images/in-shop-icon.svg-89-Aggregated", "isController": false}, {"data": [[20.0, 86.6]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[20.0, 86.6]], "isOverall": false, "label": "/js/order.min.js-130-Aggregated", "isController": false}, {"data": [[20.0, 268.6]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[20.0, 268.6]], "isOverall": false, "label": "/basket-116-Aggregated", "isController": false}, {"data": [[20.0, 89.35000000000001]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[20.0, 89.35000000000001]], "isOverall": false, "label": "/js/jquery.fias.min.js-133-Aggregated", "isController": false}, {"data": [[20.0, 93.65]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[20.0, 93.65]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132-Aggregated", "isController": false}, {"data": [[20.0, 87.1]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[20.0, 87.1]], "isOverall": false, "label": "/css/order-again.css-174-Aggregated", "isController": false}, {"data": [[20.0, 88.45000000000002]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[20.0, 88.45000000000002]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6-Aggregated", "isController": false}, {"data": [[20.0, 85.69999999999999]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[20.0, 85.69999999999999]], "isOverall": false, "label": "/images/lorry.svg-117-Aggregated", "isController": false}, {"data": [[20.0, 86.15]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[20.0, 86.15]], "isOverall": false, "label": "/js/common.min.js-31-Aggregated", "isController": false}, {"data": [[20.0, 88.6]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[20.0, 88.6]], "isOverall": false, "label": "/css/index-page.css-72-Aggregated", "isController": false}, {"data": [[20.0, 99.24999999999999]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[20.0, 99.24999999999999]], "isOverall": false, "label": "/css/common.css-93-Aggregated", "isController": false}, {"data": [[20.0, 87.94999999999999]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[20.0, 87.94999999999999]], "isOverall": false, "label": "/css/filters.css-79-Aggregated", "isController": false}, {"data": [[20.0, 87.10000000000001]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[20.0, 87.10000000000001]], "isOverall": false, "label": "/js/forms.min.js-76-Aggregated", "isController": false}, {"data": [[20.0, 92.2]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[20.0, 92.2]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143-Aggregated", "isController": false}, {"data": [[2.0, 93.0], [9.0, 123.0], [19.0, 99.0], [20.0, 93.6], [13.0, 101.0], [14.0, 92.2], [15.0, 94.2]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[15.349999999999998, 95.75]], "isOverall": false, "label": "/customer/order-179-0-Aggregated", "isController": false}, {"data": [[20.0, 86.94999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[20.0, 86.94999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33-Aggregated", "isController": false}, {"data": [[20.0, 86.39999999999999]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[20.0, 86.39999999999999]], "isOverall": false, "label": "/js/search.min.js-73-Aggregated", "isController": false}, {"data": [[20.0, 87.35000000000001]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[20.0, 87.35000000000001]], "isOverall": false, "label": "/css/product-card.css-164-Aggregated", "isController": false}, {"data": [[2.0, 603.0], [9.0, 528.0], [19.0, 665.5], [20.0, 594.8], [13.0, 483.0], [14.0, 586.6], [15.0, 566.8]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[15.349999999999998, 584.3000000000001]], "isOverall": false, "label": "/customer/order-179-2-Aggregated", "isController": false}, {"data": [[2.0, 92.0], [9.0, 93.0], [19.0, 99.5], [20.0, 92.4], [13.0, 88.0], [14.0, 88.4], [15.0, 88.2]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[15.349999999999998, 90.85000000000001]], "isOverall": false, "label": "/customer/order-179-1-Aggregated", "isController": false}, {"data": [[20.0, 88.75]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[20.0, 88.75]], "isOverall": false, "label": "/css/basket-page.css-61-Aggregated", "isController": false}, {"data": [[20.0, 90.95]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[20.0, 90.95]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82-Aggregated", "isController": false}, {"data": [[20.0, 1065.9499999999998]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[20.0, 1065.9499999999998]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92-Aggregated", "isController": false}, {"data": [[20.0, 86.55]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[20.0, 86.55]], "isOverall": false, "label": "/images/status-available.svg-87-Aggregated", "isController": false}, {"data": [[20.0, 1085.6]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[20.0, 1085.6]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84-Aggregated", "isController": false}, {"data": [[20.0, 88.7]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[20.0, 88.7]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30-Aggregated", "isController": false}, {"data": [[20.0, 87.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[20.0, 87.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-149-Aggregated", "isController": false}, {"data": [[20.0, 85.75]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[20.0, 85.75]], "isOverall": false, "label": "/css/pay-status.css-171-Aggregated", "isController": false}, {"data": [[20.0, 86.39999999999999]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[20.0, 86.39999999999999]], "isOverall": false, "label": "/js/yii.min.js-28-Aggregated", "isController": false}, {"data": [[20.0, 91.8]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[20.0, 91.8]], "isOverall": false, "label": "/js/jquery.min.js-7-Aggregated", "isController": false}, {"data": [[20.0, 92.55]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[20.0, 92.55]], "isOverall": false, "label": "/site/login-38-0-Aggregated", "isController": false}, {"data": [[20.0, 519.65]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[20.0, 519.65]], "isOverall": false, "label": "/site/login-38-1-Aggregated", "isController": false}, {"data": [[20.0, 90.10000000000001]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[20.0, 90.10000000000001]], "isOverall": false, "label": "/basket/add-to-basket-115-Aggregated", "isController": false}, {"data": [[20.0, 89.25]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[20.0, 89.25]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63-Aggregated", "isController": false}, {"data": [[20.0, 89.39999999999998]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[20.0, 89.39999999999998]], "isOverall": false, "label": "/css/product-card.css-81-Aggregated", "isController": false}, {"data": [[20.0, 85.55000000000001]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[20.0, 85.55000000000001]], "isOverall": false, "label": "/images/counter-plus.svg-88-Aggregated", "isController": false}, {"data": [[20.0, 87.50000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[20.0, 87.50000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165-Aggregated", "isController": false}, {"data": [[20.0, 87.4]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[20.0, 87.4]], "isOverall": false, "label": "/js/search.min.js-9-Aggregated", "isController": false}, {"data": [[20.0, 86.50000000000001]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[20.0, 86.50000000000001]], "isOverall": false, "label": "/images/logo.svg-17-Aggregated", "isController": false}, {"data": [[20.0, 88.64999999999999]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[20.0, 88.64999999999999]], "isOverall": false, "label": "/js/forms.min.js-140-Aggregated", "isController": false}, {"data": [[20.0, 86.14999999999999]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[20.0, 86.14999999999999]], "isOverall": false, "label": "/images/deco01.png-150-Aggregated", "isController": false}, {"data": [[20.0, 86.9]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[20.0, 86.9]], "isOverall": false, "label": "/js/indexPage.min.js-45-Aggregated", "isController": false}, {"data": [[20.0, 87.3]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[20.0, 87.3]], "isOverall": false, "label": "/css/catalog-item.css-154-Aggregated", "isController": false}, {"data": [[20.0, 90.95]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[20.0, 90.95]], "isOverall": false, "label": "/js/basket.min.js-99-Aggregated", "isController": false}, {"data": [[20.0, 85.75000000000001]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[20.0, 85.75000000000001]], "isOverall": false, "label": "/images/delivery-home.png-113-Aggregated", "isController": false}, {"data": [[20.0, 108.05000000000001]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[20.0, 108.05000000000001]], "isOverall": false, "label": "/catalog/autocomplete-91-Aggregated", "isController": false}, {"data": [[20.0, 366.09999999999997]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[20.0, 366.09999999999997]], "isOverall": false, "label": "/order-123-Aggregated", "isController": false}, {"data": [[20.0, 87.69999999999999]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[20.0, 87.69999999999999]], "isOverall": false, "label": "/images/app-modal-tree.png-18-Aggregated", "isController": false}, {"data": [[20.0, 89.8]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[20.0, 89.8]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21-Aggregated", "isController": false}, {"data": [[20.0, 90.14999999999999]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[20.0, 90.14999999999999]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139-Aggregated", "isController": false}, {"data": [[20.0, 87.94999999999997]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[20.0, 87.94999999999997]], "isOverall": false, "label": "/js/yii.validation.min.js-135-Aggregated", "isController": false}, {"data": [[20.0, 89.6]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[20.0, 89.6]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134-Aggregated", "isController": false}, {"data": [[20.0, 87.15]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[20.0, 87.15]], "isOverall": false, "label": "/css/catalog-page.css-160-Aggregated", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[20.0, 88.15]], "isOverall": false, "label": "/css/basket-page.css-166-Aggregated", "isController": false}, {"data": [[19.0, 92.0], [20.0, 86.7894736842105]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[19.95, 87.04999999999998]], "isOverall": false, "label": "/js/basket.min.js-176-Aggregated", "isController": false}, {"data": [[20.0, 1503.8]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[20.0, 1503.8]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}, {"data": [[20.0, 87.55000000000001]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}, {"data": [[20.0, 87.55000000000001]], "isOverall": false, "label": "/css/plugins/slick.css-71-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3400.6833333333334, "minX": 1.70231268E12, "maxY": 465492.23333333334, "series": [{"data": [[1.70231268E12, 238826.63333333333], [1.70231274E12, 465492.23333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70231268E12, 3400.6833333333334], [1.70231274E12, 40130.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231274E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 85.0, "minX": 1.70231268E12, "maxY": 1503.8, "series": [{"data": [[1.70231274E12, 86.8]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.70231274E12, 87.05]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.70231274E12, 88.25]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.70231268E12, 88.21052631578948], [1.70231274E12, 87.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.70231274E12, 86.75]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.70231274E12, 88.7]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.70231274E12, 87.4]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.70231274E12, 88.14999999999999]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.70231274E12, 87.19999999999997]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.70231274E12, 90.05000000000003]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.70231268E12, 679.8]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.70231274E12, 87.25]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.70231274E12, 86.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.70231274E12, 88.94999999999997]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.70231274E12, 87.7]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.70231274E12, 88.34999999999997]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.70231274E12, 88.14999999999999]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.70231274E12, 85.49999999999999]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.70231274E12, 85.65]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.70231274E12, 87.25000000000001]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.70231268E12, 86.60000000000001]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.70231274E12, 87.8]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.70231274E12, 85.95]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.70231274E12, 90.25]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.70231274E12, 86.3]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.70231274E12, 85.85]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.70231274E12, 86.05000000000001]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.70231274E12, 86.84999999999998]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.70231274E12, 86.54999999999998]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.70231274E12, 88.55000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.70231274E12, 88.95]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.70231274E12, 90.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.70231274E12, 436.8500000000001]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.70231274E12, 85.85000000000001]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.70231268E12, 89.45000000000003]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.70231274E12, 474.3]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.70231274E12, 88.65]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.70231274E12, 87.3]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.70231274E12, 86.60000000000001]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.70231274E12, 86.90000000000002]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.70231274E12, 323.49999999999994]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.70231274E12, 88.65]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.70231268E12, 88.25]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.70231274E12, 563.55]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.70231274E12, 87.4]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.70231274E12, 86.15]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.70231274E12, 85.45]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.70231274E12, 85.8]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.70231274E12, 86.94999999999999]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.70231274E12, 87.30000000000001]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.70231274E12, 86.89999999999999]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.70231274E12, 86.45]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.70231274E12, 85.65]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.70231274E12, 94.5]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.70231274E12, 831.45]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.70231274E12, 101.99999999999999]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.70231274E12, 93.15000000000002]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.70231274E12, 87.24999999999999]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.70231274E12, 86.19999999999999]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.70231274E12, 636.1]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.70231274E12, 85.65]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.70231274E12, 87.85]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.70231274E12, 86.2]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.70231274E12, 87.35]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.70231274E12, 86.49999999999999]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.70231274E12, 86.55]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.70231274E12, 86.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.70231274E12, 86.60000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.70231268E12, 86.30000000000001]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.70231268E12, 91.20000000000002]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.70231274E12, 86.15]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.70231274E12, 85.79999999999998]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.70231274E12, 88.15]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.70231268E12, 87.4705882352941], [1.70231274E12, 87.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.70231274E12, 612.4999999999999]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.70231274E12, 771.05]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.70231274E12, 90.5]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.70231274E12, 86.6]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.70231268E12, 86.84999999999998]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.70231274E12, 86.9]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.70231274E12, 86.45000000000002]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.70231274E12, 270.15]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.70231274E12, 89.65]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.70231274E12, 85.64999999999999]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.70231274E12, 88.69999999999999]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.70231274E12, 92.39999999999999]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.70231274E12, 87.40000000000002]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.70231274E12, 117.6]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.70231274E12, 86.2]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.70231268E12, 163.19999999999996], [1.70231274E12, 171.6]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.70231274E12, 88.35]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.70231274E12, 88.94999999999999]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.70231268E12, 87.55000000000001]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.70231274E12, 85.85]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.70231274E12, 86.05]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.70231274E12, 86.95]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.70231274E12, 90.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.70231274E12, 92.60000000000001]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.70231274E12, 88.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.70231274E12, 85.10000000000001]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.70231274E12, 86.45]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.70231274E12, 86.09999999999998]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.70231268E12, 87.25]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.70231274E12, 99.95000000000002]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.70231274E12, 87.10000000000001]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.70231274E12, 95.7]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.70231274E12, 88.44999999999999]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.70231274E12, 86.85]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.70231274E12, 90.69999999999999]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.70231274E12, 86.09999999999998]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.70231274E12, 86.6]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.70231274E12, 86.94999999999999]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.70231274E12, 86.60000000000002]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.70231274E12, 86.49999999999999]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.70231274E12, 90.45]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.70231274E12, 266.15000000000003]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.70231274E12, 89.69999999999999]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.70231268E12, 86.69230769230771], [1.70231274E12, 85.85714285714286]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.70231274E12, 92.04999999999998]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.70231274E12, 102.25000000000001]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.70231274E12, 86.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.70231274E12, 86.95]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.70231268E12, 87.6]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.70231274E12, 91.15]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.70231274E12, 86.2]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.70231274E12, 88.15]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.70231268E12, 86.0909090909091], [1.70231274E12, 86.99999999999999]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.70231274E12, 88.35000000000002]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.70231274E12, 88.1]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.70231274E12, 87.90000000000002]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.70231274E12, 91.20000000000002]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.70231274E12, 85.85]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.70231274E12, 85.9]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.70231274E12, 86.6]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.70231274E12, 268.6]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.70231274E12, 89.35000000000001]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.70231274E12, 93.65]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.70231274E12, 87.1]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.70231268E12, 88.45000000000002]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.70231274E12, 85.69999999999999]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.70231274E12, 86.15]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.70231274E12, 88.6]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.70231274E12, 99.24999999999999]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.70231274E12, 87.94999999999999]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.70231274E12, 87.10000000000001]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.70231274E12, 92.2]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.70231274E12, 95.75]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.70231274E12, 86.94999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.70231274E12, 86.39999999999999]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.70231274E12, 87.35000000000001]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.70231274E12, 584.3000000000001]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.70231274E12, 90.85000000000001]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.70231274E12, 88.75]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.70231274E12, 90.95]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.70231274E12, 1065.9499999999998]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.70231274E12, 86.55]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.70231274E12, 1085.6]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.70231274E12, 88.7]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.70231274E12, 87.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.70231274E12, 85.75]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.70231274E12, 86.39999999999999]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.70231268E12, 91.8]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.70231274E12, 92.55]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.70231274E12, 519.65]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.70231274E12, 90.10000000000001]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.70231274E12, 89.25]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.70231274E12, 89.39999999999998]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.70231274E12, 85.55000000000001]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.70231274E12, 87.50000000000001]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.70231268E12, 87.4]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.70231268E12, 86.625], [1.70231274E12, 86.41666666666666]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.70231274E12, 88.64999999999999]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.70231274E12, 86.14999999999999]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.70231274E12, 86.9]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.70231274E12, 87.3]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.70231274E12, 90.95]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.70231274E12, 85.75000000000001]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.70231274E12, 108.05000000000001]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.70231274E12, 366.09999999999997]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.70231268E12, 86.33333333333333], [1.70231274E12, 88.28571428571429]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.70231268E12, 85.0], [1.70231274E12, 90.05263157894737]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.70231274E12, 90.14999999999999]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.70231274E12, 87.94999999999997]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.70231274E12, 89.6]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.70231274E12, 87.15]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.70231274E12, 88.15]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.70231274E12, 87.04999999999998]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.70231268E12, 1503.8]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.70231274E12, 87.55000000000001]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231274E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 85.0, "minX": 1.70231268E12, "maxY": 1091.3500000000001, "series": [{"data": [[1.70231274E12, 86.8]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.70231274E12, 87.05]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.70231274E12, 88.25]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.70231268E12, 88.21052631578948], [1.70231274E12, 87.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.70231274E12, 86.75]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.70231274E12, 88.7]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.70231274E12, 87.34999999999998]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.70231274E12, 88.14999999999999]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.70231274E12, 87.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.70231274E12, 89.95]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.70231268E12, 655.5500000000001]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.70231274E12, 87.25]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.70231274E12, 86.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.70231274E12, 87.35]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.70231274E12, 87.65000000000002]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.70231274E12, 88.14999999999999]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.70231274E12, 88.00000000000001]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.70231274E12, 85.49999999999999]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.70231274E12, 85.65]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.70231274E12, 87.25000000000001]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.70231268E12, 86.55]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.70231274E12, 87.7]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.70231274E12, 85.95]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.70231274E12, 90.00000000000001]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.70231274E12, 86.24999999999999]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.70231274E12, 85.85]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.70231274E12, 86.00000000000001]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.70231274E12, 86.8]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.70231274E12, 88.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.70231274E12, 88.64999999999999]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.70231274E12, 89.85000000000001]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.70231274E12, 436.6]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.70231274E12, 85.85000000000001]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.70231268E12, 89.2]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.70231274E12, 461.84999999999997]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.70231274E12, 88.65]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.70231274E12, 87.3]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.70231274E12, 86.60000000000001]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.70231274E12, 86.90000000000002]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.70231274E12, 240.05]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.70231274E12, 88.65]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.70231268E12, 88.19999999999999]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.70231274E12, 483.3499999999999]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.70231274E12, 87.4]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.70231274E12, 86.15]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.70231274E12, 85.4]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.70231274E12, 85.8]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.70231274E12, 86.84999999999997]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.70231274E12, 87.30000000000001]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.70231274E12, 86.84999999999998]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.70231274E12, 86.39999999999998]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.70231274E12, 85.6]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.70231274E12, 94.44999999999999]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.70231274E12, 101.99999999999999]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.70231274E12, 101.99999999999999]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.70231274E12, 93.15000000000002]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.70231274E12, 87.24999999999999]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.70231274E12, 86.04999999999998]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.70231274E12, 565.0999999999999]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.70231274E12, 85.65]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.70231274E12, 87.80000000000001]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.70231274E12, 86.2]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.70231274E12, 87.35]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.70231274E12, 86.49999999999999]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.70231274E12, 86.19999999999999]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.70231268E12, 86.30000000000001]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.70231268E12, 90.65000000000002]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.70231274E12, 86.15]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.70231274E12, 85.79999999999998]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.70231274E12, 88.1]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.70231268E12, 87.4705882352941], [1.70231274E12, 87.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.70231274E12, 92.55]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.70231274E12, 95.75]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.70231274E12, 90.25000000000003]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.70231274E12, 86.6]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.70231268E12, 86.84999999999998]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.70231274E12, 86.9]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.70231274E12, 86.45000000000002]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.70231274E12, 270.15]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.70231274E12, 89.35000000000001]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.70231274E12, 85.64999999999999]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.70231274E12, 86.95]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.70231274E12, 92.05000000000001]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.70231274E12, 87.40000000000002]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.70231274E12, 117.6]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.70231274E12, 86.10000000000001]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.70231268E12, 89.53333333333335], [1.70231274E12, 85.6]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.70231274E12, 88.35]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.70231274E12, 88.85]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.70231268E12, 87.55000000000001]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.70231274E12, 85.85]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.70231274E12, 86.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.70231274E12, 86.95]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.70231274E12, 90.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.70231274E12, 92.55]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.70231274E12, 86.5]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.70231274E12, 87.94999999999999]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.70231274E12, 85.10000000000001]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.70231274E12, 86.35000000000001]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.70231274E12, 86.09999999999998]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.70231268E12, 87.05]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.70231274E12, 99.95000000000002]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.70231274E12, 87.10000000000001]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.70231274E12, 94.05000000000004]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.70231274E12, 88.44999999999999]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.70231274E12, 86.85]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.70231274E12, 89.9]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.70231274E12, 86.05]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.70231274E12, 86.6]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.70231274E12, 86.9]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.70231274E12, 86.55]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.70231274E12, 86.49999999999999]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.70231274E12, 90.4]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.70231274E12, 265.59999999999997]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.70231274E12, 89.39999999999999]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.70231268E12, 86.69230769230771], [1.70231274E12, 85.85714285714286]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.70231274E12, 92.04999999999998]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.70231274E12, 102.00000000000001]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.70231274E12, 86.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.70231274E12, 86.89999999999999]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.70231268E12, 87.54999999999998]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.70231274E12, 91.15]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.70231274E12, 86.45]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.70231274E12, 86.2]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.70231274E12, 88.15]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.70231268E12, 86.0909090909091], [1.70231274E12, 86.99999999999999]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.70231274E12, 88.19999999999999]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.70231274E12, 88.1]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.70231274E12, 87.75]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.70231274E12, 91.05]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.70231274E12, 85.85]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.70231274E12, 85.85000000000001]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.70231274E12, 86.55]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.70231274E12, 267.65]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.70231274E12, 89.24999999999999]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.70231274E12, 93.00000000000001]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.70231274E12, 87.1]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.70231268E12, 88.30000000000001]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.70231274E12, 85.69999999999999]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.70231274E12, 86.15]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.70231274E12, 88.44999999999999]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.70231274E12, 98.6]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.70231274E12, 87.75]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.70231274E12, 87.10000000000001]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.70231274E12, 92.2]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.70231274E12, 95.75]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.70231274E12, 86.94999999999999]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.70231274E12, 86.39999999999999]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.70231274E12, 87.3]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.70231274E12, 509.09999999999985]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.70231274E12, 90.85000000000001]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.70231274E12, 88.7]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.70231274E12, 90.9]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.70231274E12, 1064.9]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.70231274E12, 86.49999999999997]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.70231274E12, 1084.8999999999999]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.70231274E12, 88.54999999999998]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.70231274E12, 87.14999999999999]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.70231274E12, 85.75]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.70231274E12, 86.35]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.70231268E12, 90.89999999999999]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.70231274E12, 92.55]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.70231274E12, 506.9]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.70231274E12, 90.05]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.70231274E12, 89.2]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.70231274E12, 89.29999999999998]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.70231274E12, 85.55000000000001]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.70231274E12, 87.45000000000002]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.70231268E12, 87.4]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.70231268E12, 86.625], [1.70231274E12, 86.41666666666666]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.70231274E12, 88.59999999999998]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.70231274E12, 86.1]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.70231274E12, 86.9]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.70231274E12, 87.3]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.70231274E12, 90.95]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.70231274E12, 85.75000000000001]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.70231274E12, 108.00000000000001]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.70231274E12, 99.95000000000002]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.70231268E12, 86.16666666666666], [1.70231274E12, 87.78571428571428]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.70231268E12, 85.0], [1.70231274E12, 88.36842105263156]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.70231274E12, 89.94999999999999]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.70231274E12, 87.94999999999997]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.70231274E12, 89.55000000000001]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.70231274E12, 87.1]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.70231274E12, 88.05]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.70231274E12, 87.04999999999998]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.70231268E12, 1091.3500000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.70231274E12, 87.55000000000001]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231274E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70231268E12, "maxY": 405.09999999999997, "series": [{"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-46", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-98", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-177", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/css/loader.css-14", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/checkout-modals.css-127", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/btn-location.svg-138", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/filters.css-57", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-175", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-155", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-83", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/-1", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/paging.css-58", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/catalogItem.min.js-85", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/checkout-page.css-121", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-59", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/checkout-page.css-126", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/emo-chortle.svg-50", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/gen-warning.svg-118", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/checkout-modals.css-120", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/images/app-google-play-logo.png-11", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-34", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/jcb-96.png-112", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/mir-96.png-110", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-42", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/app-icon.png-52", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/category.css-56", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-168", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-69", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/shop/map/product/9791-104", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-114", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/css/common.css-2", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/-68", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-94", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/order-complete.css-147", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-55", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/loc-point-heart.svg-48", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/dostavka-107", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/arrow_menu.svg-137", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-5", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/-151", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-156", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-74", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/delivery-status.css-169", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/order-table.css-172", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/slider-arrow.svg-36", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/store.min.js-105", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/arrow.svg-54", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/mastercard-96.png-111", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/city/get-by-ip-35", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer-167", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer-167-0", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer-167-1", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/cabinet.css-173", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/static-page.css-108", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer-167-2", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-41", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/present-bg.svg-101", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/modal-close.svg-106", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/filters.css-162", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-183", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/close-modal.svg-119", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/basket-icon-green.svg-25", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/images/app-apple-logo.png-10", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/close-modal-w.svg-65", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/cabinet.css-181", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/images/app-huawei-logo.png-15", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/site/login-38", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer/order-179", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-40", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/visa-96.png-109", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-3", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/category.css-78", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24", "isController": false}, {"data": [[1.70231274E12, 181.15]], "isOverall": false, "label": "/js/forms.min.js-100", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-146", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-178", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-153", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/catalogItem.min.js-97", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/order/index-144", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-43", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/images/app-modal-phone.png-16", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-77", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/paging.css-163", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-95", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-131", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-51", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-70", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/delivery-icon.svg-90", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-157", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/paging.css-170", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-4", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/order-123-0", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-44", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/counter-minus.svg-103", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-148", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/order-information.css-182", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-152", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/orderModel.min.js-128", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-75", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/category.css-161", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/paging.css-80", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/order-123-1", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-124", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/images/search-icon.svg-19", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/basket/recalculate-basket-122", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/site/login-62", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-159", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/jquery.fias.min.css-129", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/fonts/graphik.css-12", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/site/login-67", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/basket-table.css-180", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-158", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/images/basket-icon.svg-20", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/favicon.ico-66", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/images/fias-spinner.png-141", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-102", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/sho-basket-love.svg-47", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/in-shop-icon.svg-89", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/order.min.js-130", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/basket-116", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.fias.min.js-133", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/order-again.css-174", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/lorry.svg-117", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/common.min.js-31", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/index-page.css-72", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/common.css-93", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/filters.css-79", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-76", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer/order-179-0", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-33", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-73", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-164", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer/order-179-2", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/customer/order-179-1", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-61", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/status-available.svg-87", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-149", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/pay-status.css-171", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/yii.min.js-28", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/js/jquery.min.js-7", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/site/login-38-0", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/site/login-38-1", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/basket/add-to-basket-115", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/product-card.css-81", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/counter-plus.svg-88", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165", "isController": false}, {"data": [[1.70231268E12, 0.0]], "isOverall": false, "label": "/js/search.min.js-9", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/images/logo.svg-17", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/forms.min.js-140", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/deco01.png-150", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/indexPage.min.js-45", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/catalog-item.css-154", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-99", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/images/delivery-home.png-113", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/catalog/autocomplete-91", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/order-123", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/images/app-modal-tree.png-18", "isController": false}, {"data": [[1.70231268E12, 0.0], [1.70231274E12, 0.0]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/yii.validation.min.js-135", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/catalog-page.css-160", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/basket-page.css-166", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/js/basket.min.js-176", "isController": false}, {"data": [[1.70231268E12, 405.09999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.70231274E12, 0.0]], "isOverall": false, "label": "/css/plugins/slick.css-71", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231274E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 82.0, "minX": 1.70231268E12, "maxY": 1806.0, "series": [{"data": [[1.70231268E12, 1806.0], [1.70231274E12, 1350.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70231268E12, 487.0], [1.70231274E12, 118.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70231268E12, 1690.4800000000002], [1.70231274E12, 983.69]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70231268E12, 1174.3999999999999], [1.70231274E12, 515.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70231268E12, 83.0], [1.70231274E12, 82.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70231268E12, 88.0], [1.70231274E12, 87.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231274E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 85.0, "minX": 3.0, "maxY": 1496.0, "series": [{"data": [[3.0, 92.0], [77.0, 88.0], [87.0, 87.0], [97.0, 85.0], [131.0, 88.0], [130.0, 88.0], [133.0, 88.0], [141.0, 88.0], [151.0, 88.0], [157.0, 85.0], [161.0, 86.0], [173.0, 89.0], [174.0, 88.0], [175.0, 85.0], [181.0, 88.0], [180.0, 87.0], [191.0, 86.0], [186.0, 87.0], [196.0, 86.0], [211.0, 87.0], [214.0, 87.0], [222.0, 89.0], [226.0, 87.0], [225.0, 86.0], [18.0, 1496.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[157.0, 92.0], [161.0, 92.0], [173.0, 92.0], [191.0, 88.0], [186.0, 89.0], [214.0, 91.0], [222.0, 93.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 85.0, "minX": 3.0, "maxY": 1124.5, "series": [{"data": [[3.0, 92.0], [77.0, 88.0], [87.0, 87.0], [97.0, 85.0], [131.0, 88.0], [130.0, 87.5], [133.0, 88.0], [141.0, 88.0], [151.0, 88.0], [157.0, 85.0], [161.0, 86.0], [173.0, 89.0], [174.0, 88.0], [175.0, 85.0], [181.0, 88.0], [180.0, 87.0], [191.0, 86.0], [186.0, 87.0], [196.0, 86.0], [211.0, 87.0], [214.0, 87.0], [222.0, 89.0], [226.0, 86.0], [225.0, 86.0], [18.0, 1124.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[157.0, 92.0], [161.0, 92.0], [173.0, 92.0], [191.0, 88.0], [186.0, 89.0], [214.0, 91.0], [222.0, 93.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 226.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 6.5, "minX": 1.70231268E12, "maxY": 57.5, "series": [{"data": [[1.70231268E12, 6.5], [1.70231274E12, 57.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231274E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.70231268E12, "maxY": 53.5, "series": [{"data": [[1.70231268E12, 6.166666666666667], [1.70231274E12, 53.5]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.70231274E12, 2.0]], "isOverall": false, "label": "400", "isController": false}, {"data": [[1.70231274E12, 2.0]], "isOverall": false, "label": "302", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70231274E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70231268E12, "maxY": 0.3333333333333333, "series": [{"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/-1-success", "isController": false}, {"data": [[1.70231268E12, 0.2833333333333333], [1.70231274E12, 0.05]], "isOverall": false, "label": "/images/app-huawei-logo.png-15-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/basket.min.js-176-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.matchHeight.0.7.2.min.js-26-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/basket-page.css-102-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/indexPage.min.js-45-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/order-complete.css-147-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/basket-page.css-83-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/app-icon.png-52-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/category.css-161-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/ua-parser.2.0.0-alpha.2.min.js-30-success", "isController": false}, {"data": [[1.70231268E12, 0.1], [1.70231274E12, 0.23333333333333334]], "isOverall": false, "label": "/images/app-modal-tree.png-18-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/delivery-home.png-113-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/cabinet.css-173-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.fancybox.3.5.6.min.js-53-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/order/index-144-failure", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/plugins/slick.css-71-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/fonts/Graphik-Medium-Web.woff2-22-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/counter-minus-dis.svg-86-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/lorry.svg-117-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-114-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-178-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/basket-page.css-166-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/images/app-apple-logo.png-10-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/site/login-38-0-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/slick.1.8.0.min.js-32-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/order-123-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer-167-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/site/login-62-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/catalog/ptitsy/korma/popugai_srednie/rio_korm_dlya_srednikh_popugaev-92-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-159-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/basket.min.js-46-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/index-page.css-155-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/basket.min.js-75-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/basket/recalculate-basket-122-failure", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-153-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/product-card.css-81-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/catalog/sobaki/korma_sukhie/wonderfur/wonderfur_adult_all_breeds_yagnenok_ris_dlya_sobak-84-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-125-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer/order-179-2-success", "isController": false}, {"data": [[1.70231268E12, 0.18333333333333332], [1.70231274E12, 0.15]], "isOverall": false, "label": "/images/basket-icon.svg-20-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/images/fias-spinner.png-141-failure", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/status-available.svg-87-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/basket.min.js-34-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/order-123-0-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/yii.min.js-28-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/basket/add-to-basket-115-failure", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-item.css-5-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/yii.activeForm.min.js-29-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer-167-1-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/modal-close.svg-106-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/mastercard-96.png-111-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-40-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/jquery.fias.min.css-129-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/emo-chortle.svg-50-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/slider-arrow.svg-36-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/indexPage.min.js-157-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/css/index-page.css-4-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-76-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/product-card.css-95-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/fonts/Graphik-Regular-Web.woff2-23-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/catalog/autocomplete-91-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-149-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/in-shop-icon.svg-89-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/paging.css-163-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/site/login-38-1-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/gen-warning.svg-118-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/basket-116-success", "isController": false}, {"data": [[1.70231268E12, 0.25], [1.70231274E12, 0.08333333333333333]], "isOverall": false, "label": "/images/app-modal-phone.png-16-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/jcb-96.png-112-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.min.js-7-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/js/twitter.typeahead.0.11.1.min.js-6-success", "isController": false}, {"data": [[1.70231268E12, 0.13333333333333333], [1.70231274E12, 0.2]], "isOverall": false, "label": "/images/logo.svg-17-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/assets/b165c12b/yii.js-136-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-item.css-70-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/checkout-modals.css-120-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-100-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/counter-minus.svg-103-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/orderModel.min.js-128-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/checkout-page.css-121-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-51-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-page.css-55-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer-167-0-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/basket-page.css-61-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/sho-basket-love.svg-47-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-82-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-168-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/close-modal-w.svg-65-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-9-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/orderModel.min.js-183-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/filters.css-79-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/loc-point-heart.svg-48-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/order-123-1-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/basket-table.css-180-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/plugins/slick.css-94-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/-151-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/checkout-modals.css-127-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/favicon.ico-66-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/images/app-google-play-logo.png-11-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/index-page.css-43-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/basket.min.js-99-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/veh-lorry-2.svg-49-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-175-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.nicescroll.3.7.6.min.js-8-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-69-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-146-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/filters.css-162-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/category.css-56-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/delivery-icon.svg-90-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/paging.css-170-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/site/login-67-failure", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/css/jquery.fancybox.min.css-13-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/store.min.js-105-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/orderModel.min.js-177-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/plugins/slick.css-41-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/fonts/graphik.css-12-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/js.cookie.3.0.1.min.js-27-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.fias.min.js-133-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/sale_arrow_small.svg-37-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/category.css-78-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/order-table.css-172-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/order/update-delivery-type-dependent-info-142-failure", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-93-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/basket-icon-gray.svg-24-success", "isController": false}, {"data": [[1.70231268E12, 0.21666666666666667], [1.70231274E12, 0.11666666666666667]], "isOverall": false, "label": "/images/search-icon.svg-19-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-item.css-42-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/arrow_menu.svg-137-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-64-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/btn-location.svg-138-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/css/plugins/slick.css-3-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/product-card.css-59-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/close-modal.svg-119-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/dostavka-107-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/mir-96.png-110-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/deco01.png-150-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/present-bg.svg-101-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/visa-96.png-109-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/indexPage.min.js-33-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-item.css-154-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.inputmask.bundle.4.0.2.min.js-132-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/order/render-delivery-time-dropdown-143-failure", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer/order-179-0-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.pjax.min.js-134-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-page.css-77-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-131-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/plugins/slick.css-152-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/index-page.css-72-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-148-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/-68-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-98-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-60-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/catalogItem.min.js-85-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/checkout-page.css-126-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer/order-179-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/jquery.pjax.min.js-63-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/counter-plus.svg-88-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/site/login-38-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/basket.min.js-158-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/paging.css-80-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-124-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/filters.css-57-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/catalog-page.css-160-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/paging.css-58-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-165-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/pay-status.css-171-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/indexPage.min.js-74-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/product-card.css-164-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/static-page.css-108-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "/css/common.css-2-success", "isController": false}, {"data": [[1.70231268E12, 0.31666666666666665], [1.70231274E12, 0.016666666666666666]], "isOverall": false, "label": "/css/loader.css-14-success", "isController": false}, {"data": [[1.70231268E12, 0.3333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/assets/b165c12b/yii.validation.js-139-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/order-again.css-174-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/city/get-by-ip-35-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/shop/map/product/9791-104-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-44-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-73-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/products-in-shops-modal.css-96-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/order-information.css-182-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/common.min.js-31-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/yii.validation.min.js-135-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer/order-179-1-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/basket-icon-green.svg-25-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/images/arrow.svg-54-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/catalogItem.min.js-97-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/search.min.js-156-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/customer-167-2-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/cabinet.css-181-success", "isController": false}, {"data": [[1.70231268E12, 0.016666666666666666], [1.70231274E12, 0.31666666666666665]], "isOverall": false, "label": "/fonts/Graphik-Bold-Web.woff2-21-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/css/delivery-status.css-169-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/order.min.js-130-success", "isController": false}, {"data": [[1.70231274E12, 0.3333333333333333]], "isOverall": false, "label": "/js/forms.min.js-140-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231274E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.70231268E12, "maxY": 55.5, "series": [{"data": [[1.70231268E12, 6.166666666666667], [1.70231274E12, 55.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70231274E12, 2.3333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70231274E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
