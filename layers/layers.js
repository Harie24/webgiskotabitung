var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaBitungTOPONIMI_PT_50Kshp_1 = new ol.format.GeoJSON();
var features_KotaBitungTOPONIMI_PT_50Kshp_1 = format_KotaBitungTOPONIMI_PT_50Kshp_1.readFeatures(json_KotaBitungTOPONIMI_PT_50Kshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungTOPONIMI_PT_50Kshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungTOPONIMI_PT_50Kshp_1.addFeatures(features_KotaBitungTOPONIMI_PT_50Kshp_1);
var lyr_KotaBitungTOPONIMI_PT_50Kshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungTOPONIMI_PT_50Kshp_1, 
                style: style_KotaBitungTOPONIMI_PT_50Kshp_1,
                popuplayertitle: "KotaBitung — TOPONIMI_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungTOPONIMI_PT_50Kshp_1.png" /> KotaBitung — TOPONIMI_PT_50K.shp'
            });
var format_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2 = new ol.format.GeoJSON();
var features_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2 = format_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.readFeatures(json_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.addFeatures(features_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2);
var lyr_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2, 
                style: style_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2,
                popuplayertitle: "KotaBitung — TEMPATSAMPAHAKHIR_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.png" /> KotaBitung — TEMPATSAMPAHAKHIR_PT_50K.shp'
            });
var format_KotaBitungTAMBANGAN_PT_50Kshp_3 = new ol.format.GeoJSON();
var features_KotaBitungTAMBANGAN_PT_50Kshp_3 = format_KotaBitungTAMBANGAN_PT_50Kshp_3.readFeatures(json_KotaBitungTAMBANGAN_PT_50Kshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungTAMBANGAN_PT_50Kshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungTAMBANGAN_PT_50Kshp_3.addFeatures(features_KotaBitungTAMBANGAN_PT_50Kshp_3);
var lyr_KotaBitungTAMBANGAN_PT_50Kshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungTAMBANGAN_PT_50Kshp_3, 
                style: style_KotaBitungTAMBANGAN_PT_50Kshp_3,
                popuplayertitle: "KotaBitung — TAMBANGAN_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungTAMBANGAN_PT_50Kshp_3.png" /> KotaBitung — TAMBANGAN_PT_50K.shp'
            });
var format_KotaBitungSUNGAI_LN_50Kshp_4 = new ol.format.GeoJSON();
var features_KotaBitungSUNGAI_LN_50Kshp_4 = format_KotaBitungSUNGAI_LN_50Kshp_4.readFeatures(json_KotaBitungSUNGAI_LN_50Kshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungSUNGAI_LN_50Kshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungSUNGAI_LN_50Kshp_4.addFeatures(features_KotaBitungSUNGAI_LN_50Kshp_4);
var lyr_KotaBitungSUNGAI_LN_50Kshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungSUNGAI_LN_50Kshp_4, 
                style: style_KotaBitungSUNGAI_LN_50Kshp_4,
                popuplayertitle: "KotaBitung — SUNGAI_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungSUNGAI_LN_50Kshp_4.png" /> KotaBitung — SUNGAI_LN_50K.shp'
            });
var format_KotaBitungSUNGAI_AR_50Kshp_5 = new ol.format.GeoJSON();
var features_KotaBitungSUNGAI_AR_50Kshp_5 = format_KotaBitungSUNGAI_AR_50Kshp_5.readFeatures(json_KotaBitungSUNGAI_AR_50Kshp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungSUNGAI_AR_50Kshp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungSUNGAI_AR_50Kshp_5.addFeatures(features_KotaBitungSUNGAI_AR_50Kshp_5);
var lyr_KotaBitungSUNGAI_AR_50Kshp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungSUNGAI_AR_50Kshp_5, 
                style: style_KotaBitungSUNGAI_AR_50Kshp_5,
                popuplayertitle: "KotaBitung — SUNGAI_AR_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungSUNGAI_AR_50Kshp_5.png" /> KotaBitung — SUNGAI_AR_50K.shp'
            });
var format_KotaBitungSTASIUNRADIO_PT_50Kshp_6 = new ol.format.GeoJSON();
var features_KotaBitungSTASIUNRADIO_PT_50Kshp_6 = format_KotaBitungSTASIUNRADIO_PT_50Kshp_6.readFeatures(json_KotaBitungSTASIUNRADIO_PT_50Kshp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungSTASIUNRADIO_PT_50Kshp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungSTASIUNRADIO_PT_50Kshp_6.addFeatures(features_KotaBitungSTASIUNRADIO_PT_50Kshp_6);
var lyr_KotaBitungSTASIUNRADIO_PT_50Kshp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungSTASIUNRADIO_PT_50Kshp_6, 
                style: style_KotaBitungSTASIUNRADIO_PT_50Kshp_6,
                popuplayertitle: "KotaBitung — STASIUNRADIO_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungSTASIUNRADIO_PT_50Kshp_6.png" /> KotaBitung — STASIUNRADIO_PT_50K.shp'
            });
var format_KotaBitungSPOTHEIGHT_PT_50Kshp_7 = new ol.format.GeoJSON();
var features_KotaBitungSPOTHEIGHT_PT_50Kshp_7 = format_KotaBitungSPOTHEIGHT_PT_50Kshp_7.readFeatures(json_KotaBitungSPOTHEIGHT_PT_50Kshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungSPOTHEIGHT_PT_50Kshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungSPOTHEIGHT_PT_50Kshp_7.addFeatures(features_KotaBitungSPOTHEIGHT_PT_50Kshp_7);
var lyr_KotaBitungSPOTHEIGHT_PT_50Kshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungSPOTHEIGHT_PT_50Kshp_7, 
                style: style_KotaBitungSPOTHEIGHT_PT_50Kshp_7,
                popuplayertitle: "KotaBitung — SPOTHEIGHT_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungSPOTHEIGHT_PT_50Kshp_7.png" /> KotaBitung — SPOTHEIGHT_PT_50K.shp'
            });
var format_KotaBitungSPBU_PT_50Kshp_8 = new ol.format.GeoJSON();
var features_KotaBitungSPBU_PT_50Kshp_8 = format_KotaBitungSPBU_PT_50Kshp_8.readFeatures(json_KotaBitungSPBU_PT_50Kshp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungSPBU_PT_50Kshp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungSPBU_PT_50Kshp_8.addFeatures(features_KotaBitungSPBU_PT_50Kshp_8);
var lyr_KotaBitungSPBU_PT_50Kshp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungSPBU_PT_50Kshp_8, 
                style: style_KotaBitungSPBU_PT_50Kshp_8,
                popuplayertitle: "KotaBitung — SPBU_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungSPBU_PT_50Kshp_8.png" /> KotaBitung — SPBU_PT_50K.shp'
            });
var format_KotaBitungPENDIDIKAN_AR_50Kshp_9 = new ol.format.GeoJSON();
var features_KotaBitungPENDIDIKAN_AR_50Kshp_9 = format_KotaBitungPENDIDIKAN_AR_50Kshp_9.readFeatures(json_KotaBitungPENDIDIKAN_AR_50Kshp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungPENDIDIKAN_AR_50Kshp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungPENDIDIKAN_AR_50Kshp_9.addFeatures(features_KotaBitungPENDIDIKAN_AR_50Kshp_9);
var lyr_KotaBitungPENDIDIKAN_AR_50Kshp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungPENDIDIKAN_AR_50Kshp_9, 
                style: style_KotaBitungPENDIDIKAN_AR_50Kshp_9,
                popuplayertitle: "KotaBitung — PENDIDIKAN_AR_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungPENDIDIKAN_AR_50Kshp_9.png" /> KotaBitung — PENDIDIKAN_AR_50K.shp'
            });
var format_KotaBitungPEMUKIMAN_AR_50Kshp_10 = new ol.format.GeoJSON();
var features_KotaBitungPEMUKIMAN_AR_50Kshp_10 = format_KotaBitungPEMUKIMAN_AR_50Kshp_10.readFeatures(json_KotaBitungPEMUKIMAN_AR_50Kshp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungPEMUKIMAN_AR_50Kshp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungPEMUKIMAN_AR_50Kshp_10.addFeatures(features_KotaBitungPEMUKIMAN_AR_50Kshp_10);
var lyr_KotaBitungPEMUKIMAN_AR_50Kshp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungPEMUKIMAN_AR_50Kshp_10, 
                style: style_KotaBitungPEMUKIMAN_AR_50Kshp_10,
                popuplayertitle: "KotaBitung — PEMUKIMAN_AR_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungPEMUKIMAN_AR_50Kshp_10.png" /> KotaBitung — PEMUKIMAN_AR_50K.shp'
            });
var format_KotaBitungPEMERINTAHAN_AR_50Kshp_11 = new ol.format.GeoJSON();
var features_KotaBitungPEMERINTAHAN_AR_50Kshp_11 = format_KotaBitungPEMERINTAHAN_AR_50Kshp_11.readFeatures(json_KotaBitungPEMERINTAHAN_AR_50Kshp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungPEMERINTAHAN_AR_50Kshp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungPEMERINTAHAN_AR_50Kshp_11.addFeatures(features_KotaBitungPEMERINTAHAN_AR_50Kshp_11);
var lyr_KotaBitungPEMERINTAHAN_AR_50Kshp_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungPEMERINTAHAN_AR_50Kshp_11, 
                style: style_KotaBitungPEMERINTAHAN_AR_50Kshp_11,
                popuplayertitle: "KotaBitung — PEMERINTAHAN_AR_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungPEMERINTAHAN_AR_50Kshp_11.png" /> KotaBitung — PEMERINTAHAN_AR_50K.shp'
            });
var format_KotaBitungPELABUHAN_PT_50Kshp_12 = new ol.format.GeoJSON();
var features_KotaBitungPELABUHAN_PT_50Kshp_12 = format_KotaBitungPELABUHAN_PT_50Kshp_12.readFeatures(json_KotaBitungPELABUHAN_PT_50Kshp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungPELABUHAN_PT_50Kshp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungPELABUHAN_PT_50Kshp_12.addFeatures(features_KotaBitungPELABUHAN_PT_50Kshp_12);
var lyr_KotaBitungPELABUHAN_PT_50Kshp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungPELABUHAN_PT_50Kshp_12, 
                style: style_KotaBitungPELABUHAN_PT_50Kshp_12,
                popuplayertitle: "KotaBitung — PELABUHAN_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungPELABUHAN_PT_50Kshp_12.png" /> KotaBitung — PELABUHAN_PT_50K.shp'
            });
var format_KotaBitungPARKIR_PT_50Kshp_13 = new ol.format.GeoJSON();
var features_KotaBitungPARKIR_PT_50Kshp_13 = format_KotaBitungPARKIR_PT_50Kshp_13.readFeatures(json_KotaBitungPARKIR_PT_50Kshp_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungPARKIR_PT_50Kshp_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungPARKIR_PT_50Kshp_13.addFeatures(features_KotaBitungPARKIR_PT_50Kshp_13);
var lyr_KotaBitungPARKIR_PT_50Kshp_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungPARKIR_PT_50Kshp_13, 
                style: style_KotaBitungPARKIR_PT_50Kshp_13,
                popuplayertitle: "KotaBitung — PARKIR_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungPARKIR_PT_50Kshp_13.png" /> KotaBitung — PARKIR_PT_50K.shp'
            });
var format_KotaBitungPANCARTV_PT_50Kshp_14 = new ol.format.GeoJSON();
var features_KotaBitungPANCARTV_PT_50Kshp_14 = format_KotaBitungPANCARTV_PT_50Kshp_14.readFeatures(json_KotaBitungPANCARTV_PT_50Kshp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungPANCARTV_PT_50Kshp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungPANCARTV_PT_50Kshp_14.addFeatures(features_KotaBitungPANCARTV_PT_50Kshp_14);
var lyr_KotaBitungPANCARTV_PT_50Kshp_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungPANCARTV_PT_50Kshp_14, 
                style: style_KotaBitungPANCARTV_PT_50Kshp_14,
                popuplayertitle: "KotaBitung — PANCARTV_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungPANCARTV_PT_50Kshp_14.png" /> KotaBitung — PANCARTV_PT_50K.shp'
            });
var format_KotaBitungMENARATELPON_PT_50Kshp_15 = new ol.format.GeoJSON();
var features_KotaBitungMENARATELPON_PT_50Kshp_15 = format_KotaBitungMENARATELPON_PT_50Kshp_15.readFeatures(json_KotaBitungMENARATELPON_PT_50Kshp_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungMENARATELPON_PT_50Kshp_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungMENARATELPON_PT_50Kshp_15.addFeatures(features_KotaBitungMENARATELPON_PT_50Kshp_15);
var lyr_KotaBitungMENARATELPON_PT_50Kshp_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungMENARATELPON_PT_50Kshp_15, 
                style: style_KotaBitungMENARATELPON_PT_50Kshp_15,
                popuplayertitle: "KotaBitung — MENARATELPON_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungMENARATELPON_PT_50Kshp_15.png" /> KotaBitung — MENARATELPON_PT_50K.shp'
            });
var format_KotaBitungMENARALISTRIK_PT_50Kshp_16 = new ol.format.GeoJSON();
var features_KotaBitungMENARALISTRIK_PT_50Kshp_16 = format_KotaBitungMENARALISTRIK_PT_50Kshp_16.readFeatures(json_KotaBitungMENARALISTRIK_PT_50Kshp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungMENARALISTRIK_PT_50Kshp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungMENARALISTRIK_PT_50Kshp_16.addFeatures(features_KotaBitungMENARALISTRIK_PT_50Kshp_16);
var lyr_KotaBitungMENARALISTRIK_PT_50Kshp_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungMENARALISTRIK_PT_50Kshp_16, 
                style: style_KotaBitungMENARALISTRIK_PT_50Kshp_16,
                popuplayertitle: "KotaBitung — MENARALISTRIK_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungMENARALISTRIK_PT_50Kshp_16.png" /> KotaBitung — MENARALISTRIK_PT_50K.shp'
            });
var format_KotaBitungKELOLALIMBAH_PT_50Kshp_17 = new ol.format.GeoJSON();
var features_KotaBitungKELOLALIMBAH_PT_50Kshp_17 = format_KotaBitungKELOLALIMBAH_PT_50Kshp_17.readFeatures(json_KotaBitungKELOLALIMBAH_PT_50Kshp_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungKELOLALIMBAH_PT_50Kshp_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungKELOLALIMBAH_PT_50Kshp_17.addFeatures(features_KotaBitungKELOLALIMBAH_PT_50Kshp_17);
var lyr_KotaBitungKELOLALIMBAH_PT_50Kshp_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungKELOLALIMBAH_PT_50Kshp_17, 
                style: style_KotaBitungKELOLALIMBAH_PT_50Kshp_17,
                popuplayertitle: "KotaBitung — KELOLALIMBAH_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungKELOLALIMBAH_PT_50Kshp_17.png" /> KotaBitung — KELOLALIMBAH_PT_50K.shp'
            });
var format_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18 = new ol.format.GeoJSON();
var features_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18 = format_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.readFeatures(json_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.addFeatures(features_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18);
var lyr_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18, 
                style: style_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18,
                popuplayertitle: "KotaBitung — KANTORSTASKOMBUMI_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.png" /> KotaBitung — KANTORSTASKOMBUMI_PT_50K.shp'
            });
var format_KotaBitungKANTORPOS_PT_50Kshp_19 = new ol.format.GeoJSON();
var features_KotaBitungKANTORPOS_PT_50Kshp_19 = format_KotaBitungKANTORPOS_PT_50Kshp_19.readFeatures(json_KotaBitungKANTORPOS_PT_50Kshp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungKANTORPOS_PT_50Kshp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungKANTORPOS_PT_50Kshp_19.addFeatures(features_KotaBitungKANTORPOS_PT_50Kshp_19);
var lyr_KotaBitungKANTORPOS_PT_50Kshp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungKANTORPOS_PT_50Kshp_19, 
                style: style_KotaBitungKANTORPOS_PT_50Kshp_19,
                popuplayertitle: "KotaBitung — KANTORPOS_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungKANTORPOS_PT_50Kshp_19.png" /> KotaBitung — KANTORPOS_PT_50K.shp'
            });
var format_KotaBitungKANTORPLN_PT_50Kshp_20 = new ol.format.GeoJSON();
var features_KotaBitungKANTORPLN_PT_50Kshp_20 = format_KotaBitungKANTORPLN_PT_50Kshp_20.readFeatures(json_KotaBitungKANTORPLN_PT_50Kshp_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungKANTORPLN_PT_50Kshp_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungKANTORPLN_PT_50Kshp_20.addFeatures(features_KotaBitungKANTORPLN_PT_50Kshp_20);
var lyr_KotaBitungKANTORPLN_PT_50Kshp_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungKANTORPLN_PT_50Kshp_20, 
                style: style_KotaBitungKANTORPLN_PT_50Kshp_20,
                popuplayertitle: "KotaBitung — KANTORPLN_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungKANTORPLN_PT_50Kshp_20.png" /> KotaBitung — KANTORPLN_PT_50K.shp'
            });
var format_KotaBitungKANTORAIRMINUM_PT_50Kshp_21 = new ol.format.GeoJSON();
var features_KotaBitungKANTORAIRMINUM_PT_50Kshp_21 = format_KotaBitungKANTORAIRMINUM_PT_50Kshp_21.readFeatures(json_KotaBitungKANTORAIRMINUM_PT_50Kshp_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungKANTORAIRMINUM_PT_50Kshp_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungKANTORAIRMINUM_PT_50Kshp_21.addFeatures(features_KotaBitungKANTORAIRMINUM_PT_50Kshp_21);
var lyr_KotaBitungKANTORAIRMINUM_PT_50Kshp_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungKANTORAIRMINUM_PT_50Kshp_21, 
                style: style_KotaBitungKANTORAIRMINUM_PT_50Kshp_21,
                popuplayertitle: "KotaBitung — KANTORAIRMINUM_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungKANTORAIRMINUM_PT_50Kshp_21.png" /> KotaBitung — KANTORAIRMINUM_PT_50K.shp'
            });
var format_KotaBitungKABELLISTRIK_LN_50Kshp_22 = new ol.format.GeoJSON();
var features_KotaBitungKABELLISTRIK_LN_50Kshp_22 = format_KotaBitungKABELLISTRIK_LN_50Kshp_22.readFeatures(json_KotaBitungKABELLISTRIK_LN_50Kshp_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungKABELLISTRIK_LN_50Kshp_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungKABELLISTRIK_LN_50Kshp_22.addFeatures(features_KotaBitungKABELLISTRIK_LN_50Kshp_22);
var lyr_KotaBitungKABELLISTRIK_LN_50Kshp_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungKABELLISTRIK_LN_50Kshp_22, 
                style: style_KotaBitungKABELLISTRIK_LN_50Kshp_22,
                popuplayertitle: "KotaBitung — KABELLISTRIK_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungKABELLISTRIK_LN_50Kshp_22.png" /> KotaBitung — KABELLISTRIK_LN_50K.shp'
            });
var format_KotaBitungJEMBATAN_PT_50Kshp_23 = new ol.format.GeoJSON();
var features_KotaBitungJEMBATAN_PT_50Kshp_23 = format_KotaBitungJEMBATAN_PT_50Kshp_23.readFeatures(json_KotaBitungJEMBATAN_PT_50Kshp_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungJEMBATAN_PT_50Kshp_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungJEMBATAN_PT_50Kshp_23.addFeatures(features_KotaBitungJEMBATAN_PT_50Kshp_23);
var lyr_KotaBitungJEMBATAN_PT_50Kshp_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungJEMBATAN_PT_50Kshp_23, 
                style: style_KotaBitungJEMBATAN_PT_50Kshp_23,
                popuplayertitle: "KotaBitung — JEMBATAN_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungJEMBATAN_PT_50Kshp_23.png" /> KotaBitung — JEMBATAN_PT_50K.shp'
            });
var format_KotaBitungJEMBATAN_LN_50Kshp_24 = new ol.format.GeoJSON();
var features_KotaBitungJEMBATAN_LN_50Kshp_24 = format_KotaBitungJEMBATAN_LN_50Kshp_24.readFeatures(json_KotaBitungJEMBATAN_LN_50Kshp_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungJEMBATAN_LN_50Kshp_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungJEMBATAN_LN_50Kshp_24.addFeatures(features_KotaBitungJEMBATAN_LN_50Kshp_24);
var lyr_KotaBitungJEMBATAN_LN_50Kshp_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungJEMBATAN_LN_50Kshp_24, 
                style: style_KotaBitungJEMBATAN_LN_50Kshp_24,
                popuplayertitle: "KotaBitung — JEMBATAN_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungJEMBATAN_LN_50Kshp_24.png" /> KotaBitung — JEMBATAN_LN_50K.shp'
            });
var format_KotaBitungJALAN_LN_50Kshp_25 = new ol.format.GeoJSON();
var features_KotaBitungJALAN_LN_50Kshp_25 = format_KotaBitungJALAN_LN_50Kshp_25.readFeatures(json_KotaBitungJALAN_LN_50Kshp_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungJALAN_LN_50Kshp_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungJALAN_LN_50Kshp_25.addFeatures(features_KotaBitungJALAN_LN_50Kshp_25);
var lyr_KotaBitungJALAN_LN_50Kshp_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungJALAN_LN_50Kshp_25, 
                style: style_KotaBitungJALAN_LN_50Kshp_25,
                popuplayertitle: "KotaBitung — JALAN_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungJALAN_LN_50Kshp_25.png" /> KotaBitung — JALAN_LN_50K.shp'
            });
var format_KotaBitungIRIGASI_LN_50Kshp_26 = new ol.format.GeoJSON();
var features_KotaBitungIRIGASI_LN_50Kshp_26 = format_KotaBitungIRIGASI_LN_50Kshp_26.readFeatures(json_KotaBitungIRIGASI_LN_50Kshp_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungIRIGASI_LN_50Kshp_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungIRIGASI_LN_50Kshp_26.addFeatures(features_KotaBitungIRIGASI_LN_50Kshp_26);
var lyr_KotaBitungIRIGASI_LN_50Kshp_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungIRIGASI_LN_50Kshp_26, 
                style: style_KotaBitungIRIGASI_LN_50Kshp_26,
                popuplayertitle: "KotaBitung — IRIGASI_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungIRIGASI_LN_50Kshp_26.png" /> KotaBitung — IRIGASI_LN_50K.shp'
            });
var format_KotaBitungHIDRANUMUM_PT_50Kshp_27 = new ol.format.GeoJSON();
var features_KotaBitungHIDRANUMUM_PT_50Kshp_27 = format_KotaBitungHIDRANUMUM_PT_50Kshp_27.readFeatures(json_KotaBitungHIDRANUMUM_PT_50Kshp_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungHIDRANUMUM_PT_50Kshp_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungHIDRANUMUM_PT_50Kshp_27.addFeatures(features_KotaBitungHIDRANUMUM_PT_50Kshp_27);
var lyr_KotaBitungHIDRANUMUM_PT_50Kshp_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungHIDRANUMUM_PT_50Kshp_27, 
                style: style_KotaBitungHIDRANUMUM_PT_50Kshp_27,
                popuplayertitle: "KotaBitung — HIDRANUMUM_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungHIDRANUMUM_PT_50Kshp_27.png" /> KotaBitung — HIDRANUMUM_PT_50K.shp'
            });
var format_KotaBitungGORONG_PT_50Kshp_28 = new ol.format.GeoJSON();
var features_KotaBitungGORONG_PT_50Kshp_28 = format_KotaBitungGORONG_PT_50Kshp_28.readFeatures(json_KotaBitungGORONG_PT_50Kshp_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungGORONG_PT_50Kshp_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungGORONG_PT_50Kshp_28.addFeatures(features_KotaBitungGORONG_PT_50Kshp_28);
var lyr_KotaBitungGORONG_PT_50Kshp_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungGORONG_PT_50Kshp_28, 
                style: style_KotaBitungGORONG_PT_50Kshp_28,
                popuplayertitle: "KotaBitung — GORONG_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungGORONG_PT_50Kshp_28.png" /> KotaBitung — GORONG_PT_50K.shp'
            });
var format_KotaBitungGENLISTRIK_PT_50Kshp_29 = new ol.format.GeoJSON();
var features_KotaBitungGENLISTRIK_PT_50Kshp_29 = format_KotaBitungGENLISTRIK_PT_50Kshp_29.readFeatures(json_KotaBitungGENLISTRIK_PT_50Kshp_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungGENLISTRIK_PT_50Kshp_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungGENLISTRIK_PT_50Kshp_29.addFeatures(features_KotaBitungGENLISTRIK_PT_50Kshp_29);
var lyr_KotaBitungGENLISTRIK_PT_50Kshp_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungGENLISTRIK_PT_50Kshp_29, 
                style: style_KotaBitungGENLISTRIK_PT_50Kshp_29,
                popuplayertitle: "KotaBitung — GENLISTRIK_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungGENLISTRIK_PT_50Kshp_29.png" /> KotaBitung — GENLISTRIK_PT_50K.shp'
            });
var format_KotaBitungGARISRPANTAI_LN_50Kshp_30 = new ol.format.GeoJSON();
var features_KotaBitungGARISRPANTAI_LN_50Kshp_30 = format_KotaBitungGARISRPANTAI_LN_50Kshp_30.readFeatures(json_KotaBitungGARISRPANTAI_LN_50Kshp_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungGARISRPANTAI_LN_50Kshp_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungGARISRPANTAI_LN_50Kshp_30.addFeatures(features_KotaBitungGARISRPANTAI_LN_50Kshp_30);
var lyr_KotaBitungGARISRPANTAI_LN_50Kshp_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungGARISRPANTAI_LN_50Kshp_30, 
                style: style_KotaBitungGARISRPANTAI_LN_50Kshp_30,
                popuplayertitle: "KotaBitung — GARISRPANTAI_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungGARISRPANTAI_LN_50Kshp_30.png" /> KotaBitung — GARISRPANTAI_LN_50K.shp'
            });
var format_KotaBitungDERMAGA_PT_50Kshp_31 = new ol.format.GeoJSON();
var features_KotaBitungDERMAGA_PT_50Kshp_31 = format_KotaBitungDERMAGA_PT_50Kshp_31.readFeatures(json_KotaBitungDERMAGA_PT_50Kshp_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungDERMAGA_PT_50Kshp_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungDERMAGA_PT_50Kshp_31.addFeatures(features_KotaBitungDERMAGA_PT_50Kshp_31);
var lyr_KotaBitungDERMAGA_PT_50Kshp_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungDERMAGA_PT_50Kshp_31, 
                style: style_KotaBitungDERMAGA_PT_50Kshp_31,
                popuplayertitle: "KotaBitung — DERMAGA_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungDERMAGA_PT_50Kshp_31.png" /> KotaBitung — DERMAGA_PT_50K.shp'
            });
var format_KotaBitungDEPOMINYAK_PT_50Kshp_32 = new ol.format.GeoJSON();
var features_KotaBitungDEPOMINYAK_PT_50Kshp_32 = format_KotaBitungDEPOMINYAK_PT_50Kshp_32.readFeatures(json_KotaBitungDEPOMINYAK_PT_50Kshp_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungDEPOMINYAK_PT_50Kshp_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungDEPOMINYAK_PT_50Kshp_32.addFeatures(features_KotaBitungDEPOMINYAK_PT_50Kshp_32);
var lyr_KotaBitungDEPOMINYAK_PT_50Kshp_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungDEPOMINYAK_PT_50Kshp_32, 
                style: style_KotaBitungDEPOMINYAK_PT_50Kshp_32,
                popuplayertitle: "KotaBitung — DEPOMINYAK_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungDEPOMINYAK_PT_50Kshp_32.png" /> KotaBitung — DEPOMINYAK_PT_50K.shp'
            });
var format_KotaBitungDEPOGAS_PT_50Kshp_33 = new ol.format.GeoJSON();
var features_KotaBitungDEPOGAS_PT_50Kshp_33 = format_KotaBitungDEPOGAS_PT_50Kshp_33.readFeatures(json_KotaBitungDEPOGAS_PT_50Kshp_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungDEPOGAS_PT_50Kshp_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungDEPOGAS_PT_50Kshp_33.addFeatures(features_KotaBitungDEPOGAS_PT_50Kshp_33);
var lyr_KotaBitungDEPOGAS_PT_50Kshp_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungDEPOGAS_PT_50Kshp_33, 
                style: style_KotaBitungDEPOGAS_PT_50Kshp_33,
                popuplayertitle: "KotaBitung — DEPOGAS_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungDEPOGAS_PT_50Kshp_33.png" /> KotaBitung — DEPOGAS_PT_50K.shp'
            });
var format_KotaBitungBANGUNAN_PT_50Kshp_34 = new ol.format.GeoJSON();
var features_KotaBitungBANGUNAN_PT_50Kshp_34 = format_KotaBitungBANGUNAN_PT_50Kshp_34.readFeatures(json_KotaBitungBANGUNAN_PT_50Kshp_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungBANGUNAN_PT_50Kshp_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungBANGUNAN_PT_50Kshp_34.addFeatures(features_KotaBitungBANGUNAN_PT_50Kshp_34);
var lyr_KotaBitungBANGUNAN_PT_50Kshp_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungBANGUNAN_PT_50Kshp_34, 
                style: style_KotaBitungBANGUNAN_PT_50Kshp_34,
                popuplayertitle: "KotaBitung — BANGUNAN_PT_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungBANGUNAN_PT_50Kshp_34.png" /> KotaBitung — BANGUNAN_PT_50K.shp'
            });
var format_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35 = new ol.format.GeoJSON();
var features_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35 = format_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.readFeatures(json_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.addFeatures(features_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35);
var lyr_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35, 
                style: style_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35,
                popuplayertitle: "KotaBitung — ADMINISTRASIKECAMATAN_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.png" /> KotaBitung — ADMINISTRASIKECAMATAN_LN_50K.shp'
            });
var format_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36 = new ol.format.GeoJSON();
var features_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36 = format_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.readFeatures(json_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.addFeatures(features_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36);
var lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36, 
                style: style_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36,
                popuplayertitle: "KotaBitung — ADMINISTRASIKABKOTA_LN_50K.shp",
                interactive: true,
                title: '<img src="styles/legend/KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.png" /> KotaBitung — ADMINISTRASIKABKOTA_LN_50K.shp'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KotaBitungTOPONIMI_PT_50Kshp_1.setVisible(true);lyr_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.setVisible(true);lyr_KotaBitungTAMBANGAN_PT_50Kshp_3.setVisible(true);lyr_KotaBitungSUNGAI_LN_50Kshp_4.setVisible(true);lyr_KotaBitungSUNGAI_AR_50Kshp_5.setVisible(true);lyr_KotaBitungSTASIUNRADIO_PT_50Kshp_6.setVisible(true);lyr_KotaBitungSPOTHEIGHT_PT_50Kshp_7.setVisible(true);lyr_KotaBitungSPBU_PT_50Kshp_8.setVisible(true);lyr_KotaBitungPENDIDIKAN_AR_50Kshp_9.setVisible(true);lyr_KotaBitungPEMUKIMAN_AR_50Kshp_10.setVisible(true);lyr_KotaBitungPEMERINTAHAN_AR_50Kshp_11.setVisible(true);lyr_KotaBitungPELABUHAN_PT_50Kshp_12.setVisible(true);lyr_KotaBitungPARKIR_PT_50Kshp_13.setVisible(true);lyr_KotaBitungPANCARTV_PT_50Kshp_14.setVisible(true);lyr_KotaBitungMENARATELPON_PT_50Kshp_15.setVisible(true);lyr_KotaBitungMENARALISTRIK_PT_50Kshp_16.setVisible(true);lyr_KotaBitungKELOLALIMBAH_PT_50Kshp_17.setVisible(true);lyr_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.setVisible(true);lyr_KotaBitungKANTORPOS_PT_50Kshp_19.setVisible(true);lyr_KotaBitungKANTORPLN_PT_50Kshp_20.setVisible(true);lyr_KotaBitungKANTORAIRMINUM_PT_50Kshp_21.setVisible(true);lyr_KotaBitungKABELLISTRIK_LN_50Kshp_22.setVisible(true);lyr_KotaBitungJEMBATAN_PT_50Kshp_23.setVisible(true);lyr_KotaBitungJEMBATAN_LN_50Kshp_24.setVisible(true);lyr_KotaBitungJALAN_LN_50Kshp_25.setVisible(true);lyr_KotaBitungIRIGASI_LN_50Kshp_26.setVisible(true);lyr_KotaBitungHIDRANUMUM_PT_50Kshp_27.setVisible(true);lyr_KotaBitungGORONG_PT_50Kshp_28.setVisible(true);lyr_KotaBitungGENLISTRIK_PT_50Kshp_29.setVisible(true);lyr_KotaBitungGARISRPANTAI_LN_50Kshp_30.setVisible(true);lyr_KotaBitungDERMAGA_PT_50Kshp_31.setVisible(true);lyr_KotaBitungDEPOMINYAK_PT_50Kshp_32.setVisible(true);lyr_KotaBitungDEPOGAS_PT_50Kshp_33.setVisible(true);lyr_KotaBitungBANGUNAN_PT_50Kshp_34.setVisible(true);lyr_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.setVisible(true);lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KotaBitungTOPONIMI_PT_50Kshp_1,lyr_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2,lyr_KotaBitungTAMBANGAN_PT_50Kshp_3,lyr_KotaBitungSUNGAI_LN_50Kshp_4,lyr_KotaBitungSUNGAI_AR_50Kshp_5,lyr_KotaBitungSTASIUNRADIO_PT_50Kshp_6,lyr_KotaBitungSPOTHEIGHT_PT_50Kshp_7,lyr_KotaBitungSPBU_PT_50Kshp_8,lyr_KotaBitungPENDIDIKAN_AR_50Kshp_9,lyr_KotaBitungPEMUKIMAN_AR_50Kshp_10,lyr_KotaBitungPEMERINTAHAN_AR_50Kshp_11,lyr_KotaBitungPELABUHAN_PT_50Kshp_12,lyr_KotaBitungPARKIR_PT_50Kshp_13,lyr_KotaBitungPANCARTV_PT_50Kshp_14,lyr_KotaBitungMENARATELPON_PT_50Kshp_15,lyr_KotaBitungMENARALISTRIK_PT_50Kshp_16,lyr_KotaBitungKELOLALIMBAH_PT_50Kshp_17,lyr_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18,lyr_KotaBitungKANTORPOS_PT_50Kshp_19,lyr_KotaBitungKANTORPLN_PT_50Kshp_20,lyr_KotaBitungKANTORAIRMINUM_PT_50Kshp_21,lyr_KotaBitungKABELLISTRIK_LN_50Kshp_22,lyr_KotaBitungJEMBATAN_PT_50Kshp_23,lyr_KotaBitungJEMBATAN_LN_50Kshp_24,lyr_KotaBitungJALAN_LN_50Kshp_25,lyr_KotaBitungIRIGASI_LN_50Kshp_26,lyr_KotaBitungHIDRANUMUM_PT_50Kshp_27,lyr_KotaBitungGORONG_PT_50Kshp_28,lyr_KotaBitungGENLISTRIK_PT_50Kshp_29,lyr_KotaBitungGARISRPANTAI_LN_50Kshp_30,lyr_KotaBitungDERMAGA_PT_50Kshp_31,lyr_KotaBitungDEPOMINYAK_PT_50Kshp_32,lyr_KotaBitungDEPOGAS_PT_50Kshp_33,lyr_KotaBitungBANGUNAN_PT_50Kshp_34,lyr_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35,lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36];
lyr_KotaBitungTOPONIMI_PT_50Kshp_1.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungTAMBANGAN_PT_50Kshp_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungSUNGAI_LN_50Kshp_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungSUNGAI_AR_50Kshp_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KotaBitungSTASIUNRADIO_PT_50Kshp_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungSPOTHEIGHT_PT_50Kshp_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungSPBU_PT_50Kshp_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungPENDIDIKAN_AR_50Kshp_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGDPDK': 'FGDPDK', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSPDK': 'JNSPDK', 'JJGPDF': 'JJGPDF', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KotaBitungPEMUKIMAN_AR_50Kshp_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KotaBitungPEMERINTAHAN_AR_50Kshp_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KotaBitungPELABUHAN_PT_50Kshp_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_KotaBitungPARKIR_PT_50Kshp_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungPANCARTV_PT_50Kshp_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'TGGPNC': 'TGGPNC', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungMENARATELPON_PT_50Kshp_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungMENARALISTRIK_PT_50Kshp_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungKELOLALIMBAH_PT_50Kshp_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'JPLTPL': 'JPLTPL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungKANTORPOS_PT_50Kshp_19.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungKANTORPLN_PT_50Kshp_20.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungKANTORAIRMINUM_PT_50Kshp_21.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungKABELLISTRIK_LN_50Kshp_22.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'DAYA': 'DAYA', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungJEMBATAN_PT_50Kshp_23.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungJEMBATAN_LN_50Kshp_24.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungJALAN_LN_50Kshp_25.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungIRIGASI_LN_50Kshp_26.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungHIDRANUMUM_PT_50Kshp_27.set('fieldAliases', {'KAPSTS': 'KAPSTS', 'DEBIT': 'DEBIT', 'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungGORONG_PT_50Kshp_28.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungGENLISTRIK_PT_50Kshp_29.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSPLS': 'JNSPLS', 'FCODE': 'FCODE', 'DAYA': 'DAYA', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungGARISRPANTAI_LN_50Kshp_30.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungDERMAGA_PT_50Kshp_31.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungDEPOMINYAK_PT_50Kshp_32.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungDEPOGAS_PT_50Kshp_33.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungBANGUNAN_PT_50Kshp_34.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KotaBitungTOPONIMI_PT_50Kshp_1.set('fieldImages', {'FCODE': '', 'NAMOBJ': '', 'ALIAS': '', 'LOKTPN': '', 'REMARK': '', 'KLSTPN': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'FTYPE': '', 'LAT': '', 'LON': '', 'KOORDY': '', 'KOORDX': '', 'KOORDINAT1': '', 'KORDINTAT2': '', 'LUAS': '', 'Elevasi': '', 'NAMLOK': '', 'NAMSPE': '', 'NAMMAP': '', 'NAMGAZ': '', 'SJHNAM': '', 'ARTINAM': '', 'ASLBHS': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'STATUS': '', });
lyr_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungTAMBANGAN_PT_50Kshp_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungSUNGAI_LN_50Kshp_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_KotaBitungSUNGAI_AR_50Kshp_5.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KotaBitungSTASIUNRADIO_PT_50Kshp_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungSPOTHEIGHT_PT_50Kshp_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ELEVAS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungSPBU_PT_50Kshp_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungPENDIDIKAN_AR_50Kshp_9.set('fieldImages', {'NAMOBJ': '', 'KATPDK': '', 'JLPDDK': '', 'FGDPDK': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSPDK': '', 'JJGPDF': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KotaBitungPEMUKIMAN_AR_50Kshp_10.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KotaBitungPEMERINTAHAN_AR_50Kshp_11.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KotaBitungPELABUHAN_PT_50Kshp_12.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ADMPEL': '', 'JNSPEL': '', 'FGSPEL': '', 'PJAPEL': '', 'LAMPEL': '', 'STUPEL': '', 'KONKON': '', 'LUAS': '', 'KMXPEL': '', 'KMNPEL': '', 'STPPEL': '', 'SRPPEL': '', 'ALJPEL': '', 'REMARK': '', 'KLSPEL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KODPEL': '', });
lyr_KotaBitungPARKIR_PT_50Kshp_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungPANCARTV_PT_50Kshp_14.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'TGGPNC': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungMENARATELPON_PT_50Kshp_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungMENARALISTRIK_PT_50Kshp_16.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungKELOLALIMBAH_PT_50Kshp_17.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'JPLTPL': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungKANTORPOS_PT_50Kshp_19.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungKANTORPLN_PT_50Kshp_20.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungKANTORAIRMINUM_PT_50Kshp_21.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungKABELLISTRIK_LN_50Kshp_22.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'FCODE': '', 'DAYA': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_KotaBitungJEMBATAN_PT_50Kshp_23.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungJEMBATAN_LN_50Kshp_24.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'JBTJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_KotaBitungJALAN_LN_50Kshp_25.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_KotaBitungIRIGASI_LN_50Kshp_26.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_KotaBitungHIDRANUMUM_PT_50Kshp_27.set('fieldImages', {'KAPSTS': '', 'DEBIT': '', 'FCODE': '', 'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungGORONG_PT_50Kshp_28.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'SRS_ID': '', 'FCODE': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungGENLISTRIK_PT_50Kshp_29.set('fieldImages', {'NAMOBJ': '', 'JNSPLS': '', 'FCODE': '', 'DAYA': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungGARISRPANTAI_LN_50Kshp_30.set('fieldImages', {'NAMOBJ': '', 'DTMVER': '', 'KARGPN': '', 'FCODE': '', 'KODGPN': '', 'TIPGPN': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_KotaBitungDERMAGA_PT_50Kshp_31.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungDEPOMINYAK_PT_50Kshp_32.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungDEPOGAS_PT_50Kshp_33.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungBANGUNAN_PT_50Kshp_34.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_KotaBitungTOPONIMI_PT_50Kshp_1.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_KotaBitungTEMPATSAMPAHAKHIR_PT_50Kshp_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungTAMBANGAN_PT_50Kshp_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungSUNGAI_LN_50Kshp_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungSUNGAI_AR_50Kshp_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KotaBitungSTASIUNRADIO_PT_50Kshp_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungSPOTHEIGHT_PT_50Kshp_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ELEVAS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungSPBU_PT_50Kshp_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungPENDIDIKAN_AR_50Kshp_9.set('fieldLabels', {'NAMOBJ': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGDPDK': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSPDK': 'no label', 'JJGPDF': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KotaBitungPEMUKIMAN_AR_50Kshp_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KotaBitungPEMERINTAHAN_AR_50Kshp_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KotaBitungPELABUHAN_PT_50Kshp_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_KotaBitungPARKIR_PT_50Kshp_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungPANCARTV_PT_50Kshp_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'TGGPNC': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungMENARATELPON_PT_50Kshp_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungMENARALISTRIK_PT_50Kshp_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungKELOLALIMBAH_PT_50Kshp_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'JPLTPL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungKANTORSTASKOMBUMI_PT_50Kshp_18.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungKANTORPOS_PT_50Kshp_19.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'JNKPOS': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungKANTORPLN_PT_50Kshp_20.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungKANTORAIRMINUM_PT_50Kshp_21.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungKABELLISTRIK_LN_50Kshp_22.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'DAYA': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungJEMBATAN_PT_50Kshp_23.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungJEMBATAN_LN_50Kshp_24.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungJALAN_LN_50Kshp_25.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungIRIGASI_LN_50Kshp_26.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungHIDRANUMUM_PT_50Kshp_27.set('fieldLabels', {'KAPSTS': 'no label', 'DEBIT': 'no label', 'FCODE': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungGORONG_PT_50Kshp_28.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungGENLISTRIK_PT_50Kshp_29.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSPLS': 'no label', 'FCODE': 'no label', 'DAYA': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungGARISRPANTAI_LN_50Kshp_30.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungDERMAGA_PT_50Kshp_31.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungDEPOMINYAK_PT_50Kshp_32.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungDEPOGAS_PT_50Kshp_33.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungBANGUNAN_PT_50Kshp_34.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KotaBitungADMINISTRASIKECAMATAN_LN_50Kshp_35.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KotaBitungADMINISTRASIKABKOTA_LN_50Kshp_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});