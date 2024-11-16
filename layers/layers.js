var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BATASDESA_1 = new ol.format.GeoJSON();
var features_BATASDESA_1 = format_BATASDESA_1.readFeatures(json_BATASDESA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESA_1.addFeatures(features_BATASDESA_1);
var lyr_BATASDESA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESA_1, 
                style: style_BATASDESA_1,
                popuplayertitle: "BATAS DESA",
                interactive: true,
    title: 'BATAS DESA<br />\
    <img src="styles/legend/BATASDESA_1_0.png" /> RT 5 RW 3<br />\
    <img src="styles/legend/BATASDESA_1_1.png" /> RT 1 RW 2<br />\
    <img src="styles/legend/BATASDESA_1_2.png" /> RT 1 RW 3<br />\
    <img src="styles/legend/BATASDESA_1_3.png" /> RT 2 RW 2<br />\
    <img src="styles/legend/BATASDESA_1_4.png" /> RT 2 RW 3<br />\
    <img src="styles/legend/BATASDESA_1_5.png" /> RT 3 RW 2<br />\
    <img src="styles/legend/BATASDESA_1_6.png" /> RT 3 RW 3<br />\
    <img src="styles/legend/BATASDESA_1_7.png" /> RW 4 RW 3<br />\
    <img src="styles/legend/BATASDESA_1_8.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/BATASDESA_1_9.png" /> RT 2 RW 1<br />\
    <img src="styles/legend/BATASDESA_1_10.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/BATASDESA_1_11.png" /> RT 5 RW 1<br />\
    <img src="styles/legend/BATASDESA_1_12.png" /> RT 4 RW 1<br />\
    <img src="styles/legend/BATASDESA_1_13.png" /> RT 4 RW 2<br />\
    <img src="styles/legend/BATASDESA_1_14.png" /> RT 5 RW 2<br />\
    <img src="styles/legend/BATASDESA_1_15.png" /> DINAS KOPERASI PURBALINGGA<br />\
    <img src="styles/legend/BATASDESA_1_16.png" /> MALL PELAYANAN PUBLIK PURBALINGGA<br />\
    <img src="styles/legend/BATASDESA_1_17.png" /> SEKRETARIAT DEWAN PURBALINGGA<br />\
    <img src="styles/legend/BATASDESA_1_18.png" /> SMK WIDYA MANGGALA PURBALINGGA<br />\
    <img src="styles/legend/BATASDESA_1_19.png" /> SMK YPT 2 PURBALINGGA<br />\
    <img src="styles/legend/BATASDESA_1_20.png" /> ALFAMART SELABAYA<br />\
    <img src="styles/legend/BATASDESA_1_21.png" /> DIPERINDAG PURBALINGGA<br />\
    <img src="styles/legend/BATASDESA_1_22.png" /> SAWAH<br />\
    <img src="styles/legend/BATASDESA_1_23.png" /> SAWAH <br />\
    <img src="styles/legend/BATASDESA_1_24.png" /> <br />'
        });
var format_ADMINISTRASIDESA_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_2 = format_ADMINISTRASIDESA_AR_25K_2.readFeatures(json_ADMINISTRASIDESA_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_2.addFeatures(features_ADMINISTRASIDESA_AR_25K_2);
var lyr_ADMINISTRASIDESA_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_2, 
                style: style_ADMINISTRASIDESA_AR_25K_2,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_2.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_desa_selebaya_line_3 = new ol.format.GeoJSON();
var features_desa_selebaya_line_3 = format_desa_selebaya_line_3.readFeatures(json_desa_selebaya_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_selebaya_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_selebaya_line_3.addFeatures(features_desa_selebaya_line_3);
var lyr_desa_selebaya_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_selebaya_line_3, 
                style: style_desa_selebaya_line_3,
                popuplayertitle: "desa_selebaya_line",
                interactive: true,
    title: 'desa_selebaya_line<br />\
    <img src="styles/legend/desa_selebaya_line_3_0.png" /> Anak Induk Sungai Serayu<br />\
    <img src="styles/legend/desa_selebaya_line_3_1.png" /> Jalan Ahmad Yani<br />\
    <img src="styles/legend/desa_selebaya_line_3_2.png" /> Jalan Mayor Jenderal Sungkono<br />\
    <img src="styles/legend/desa_selebaya_line_3_3.png" /> Gg buntu<br />\
    <img src="styles/legend/desa_selebaya_line_3_4.png" /> Gg Buntu<br />\
    <img src="styles/legend/desa_selebaya_line_3_5.png" /> Gg Cendana I<br />\
    <img src="styles/legend/desa_selebaya_line_3_6.png" /> Gg.BUNTU<br />\
    <img src="styles/legend/desa_selebaya_line_3_7.png" /> Gg.Buntu2<br />\
    <img src="styles/legend/desa_selebaya_line_3_8.png" /> Gg.MANDALIKA IV<br />\
    <img src="styles/legend/desa_selebaya_line_3_9.png" /> Jl Berkah<br />\
    <img src="styles/legend/desa_selebaya_line_3_10.png" /> Jl Cendana Raya<br />\
    <img src="styles/legend/desa_selebaya_line_3_11.png" /> JL Dipenogoro<br />\
    <img src="styles/legend/desa_selebaya_line_3_12.png" /> Jl Dipenogoro II<br />\
    <img src="styles/legend/desa_selebaya_line_3_13.png" /> Jl Permata<br />\
    <img src="styles/legend/desa_selebaya_line_3_14.png" /> Jl Perum I<br />\
    <img src="styles/legend/desa_selebaya_line_3_15.png" /> Jl Perum II<br />\
    <img src="styles/legend/desa_selebaya_line_3_16.png" /> Jl Perum III<br />\
    <img src="styles/legend/desa_selebaya_line_3_17.png" /> Jl Sekolahan YPT 2 PURBALINGGA<br />\
    <img src="styles/legend/desa_selebaya_line_3_18.png" /> Jl TPU Selabaya<br />\
    <img src="styles/legend/desa_selebaya_line_3_19.png" /> Jl Waskita<br />\
    <img src="styles/legend/desa_selebaya_line_3_20.png" /> JL. CENDANA<br />\
    <img src="styles/legend/desa_selebaya_line_3_21.png" /> Jl. H. SYAMSURI 3<br />\
    <img src="styles/legend/desa_selebaya_line_3_22.png" /> Jl. Mirasa<br />\
    <img src="styles/legend/desa_selebaya_line_3_23.png" /> JL.BHAYANGKARA<br />\
    <img src="styles/legend/desa_selebaya_line_3_24.png" /> JL.BUNTU 3<br />\
    <img src="styles/legend/desa_selebaya_line_3_25.png" /> JL.Buntu3<br />\
    <img src="styles/legend/desa_selebaya_line_3_26.png" /> JL.DESA SELEBAYA<br />\
    <img src="styles/legend/desa_selebaya_line_3_27.png" /> JL.H.SYAMSURI 2<br />\
    <img src="styles/legend/desa_selebaya_line_3_28.png" /> JL.HJ .SYAMSURI 1<br />\
    <img src="styles/legend/desa_selebaya_line_3_29.png" /> JL.KARANGPETIR<br />\
    <img src="styles/legend/desa_selebaya_line_3_30.png" /> JL.MASJID<br />\
    <img src="styles/legend/desa_selebaya_line_3_31.png" /> <br />'
        });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });
var format_desa_selebaya_poly_5 = new ol.format.GeoJSON();
var features_desa_selebaya_poly_5 = format_desa_selebaya_poly_5.readFeatures(json_desa_selebaya_poly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_selebaya_poly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_selebaya_poly_5.addFeatures(features_desa_selebaya_poly_5);
var lyr_desa_selebaya_poly_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_selebaya_poly_5, 
                style: style_desa_selebaya_poly_5,
                popuplayertitle: "desa_selebaya_poly",
                interactive: true,
                title: '<img src="styles/legend/desa_selebaya_poly_5.png" /> desa_selebaya_poly'
            });
var format_desa_selebaya_point_6 = new ol.format.GeoJSON();
var features_desa_selebaya_point_6 = format_desa_selebaya_point_6.readFeatures(json_desa_selebaya_point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_selebaya_point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_selebaya_point_6.addFeatures(features_desa_selebaya_point_6);
var lyr_desa_selebaya_point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_selebaya_point_6, 
                style: style_desa_selebaya_point_6,
                popuplayertitle: "desa_selebaya_point",
                interactive: true,
    title: 'desa_selebaya_point<br />\
    <img src="styles/legend/desa_selebaya_point_6_0.png" /> Al Muhajjirin<br />\
    <img src="styles/legend/desa_selebaya_point_6_1.png" /> Jantera<br />\
    <img src="styles/legend/desa_selebaya_point_6_2.png" /> Kalimanah<br />\
    <img src="styles/legend/desa_selebaya_point_6_3.png" /> Kantor Kelurahan Selabaya<br />\
    <img src="styles/legend/desa_selebaya_point_6_4.png" /> Kolam SMK 1<br />\
    <img src="styles/legend/desa_selebaya_point_6_5.png" /> Komp. PT Pertani Purbalingga<br />\
    <img src="styles/legend/desa_selebaya_point_6_6.png" /> Lab. FISIKA<br />\
    <img src="styles/legend/desa_selebaya_point_6_7.png" /> Lab. OTKP<br />\
    <img src="styles/legend/desa_selebaya_point_6_8.png" /> Masjid SMKN 1 Purbalingga<br />\
    <img src="styles/legend/desa_selebaya_point_6_9.png" /> Pasar SegaMas Purbalingga<br />\
    <img src="styles/legend/desa_selebaya_point_6_10.png" /> Penanda SMKN 1<br />\
    <img src="styles/legend/desa_selebaya_point_6_11.png" /> Perpustakaan Prima Pustaka SMKN 1<br />\
    <img src="styles/legend/desa_selebaya_point_6_12.png" /> Perumahan Permata Perwira Kalimanah<br />\
    <img src="styles/legend/desa_selebaya_point_6_13.png" /> Planjan<br />\
    <img src="styles/legend/desa_selebaya_point_6_14.png" /> Ruang BK<br />\
    <img src="styles/legend/desa_selebaya_point_6_15.png" /> Ruang Seni Budaya<br />\
    <img src="styles/legend/desa_selebaya_point_6_16.png" /> SDN Kalimanah 1 Purbalingga<br />\
    <img src="styles/legend/desa_selebaya_point_6_17.png" /> Selabaya<br />\
    <img src="styles/legend/desa_selebaya_point_6_18.png" /> Selabaya Indah<br />\
    <img src="styles/legend/desa_selebaya_point_6_19.png" /> SMEGA MART<br />\
    <img src="styles/legend/desa_selebaya_point_6_20.png" /> SMK Negeri 1 Purbalingga<br />\
    <img src="styles/legend/desa_selebaya_point_6_21.png" /> SMK YPT 1 PBG BARU<br />\
    <img src="styles/legend/desa_selebaya_point_6_22.png" /> SMK YPT 1 PBG LAMA<br />\
    <img src="styles/legend/desa_selebaya_point_6_23.png" /> SMK YPT 2 PBG<br />\
    <img src="styles/legend/desa_selebaya_point_6_24.png" /> SMK YPT 2 PURBALINGGA<br />\
    <img src="styles/legend/desa_selebaya_point_6_25.png" /> SMKN 1 Purbalingga<br />\
    <img src="styles/legend/desa_selebaya_point_6_26.png" /> APOTEK KALIMANAH<br />\
    <img src="styles/legend/desa_selebaya_point_6_27.png" /> RUMAH TIMOTHY<br />\
    <img src="styles/legend/desa_selebaya_point_6_28.png" /> TOKO BESI KALIMANAH<br />\
    <img src="styles/legend/desa_selebaya_point_6_29.png" /> TOKO CIPTO<br />\
    <img src="styles/legend/desa_selebaya_point_6_30.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_BATASDESA_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_2.setVisible(true);lyr_desa_selebaya_line_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_desa_selebaya_poly_5.setVisible(true);lyr_desa_selebaya_point_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BATASDESA_1,lyr_ADMINISTRASIDESA_AR_25K_2,lyr_desa_selebaya_line_3,lyr_Clipped_4,lyr_desa_selebaya_poly_5,lyr_desa_selebaya_point_6];
lyr_BATASDESA_1.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_selebaya_line_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'width': 'width', 'name_fr': 'name_fr', 'covered': 'covered', 'building': 'building', 'operator': 'operator', 'natural': 'natural', 'name_en': 'name_en', 'waterway': 'waterway', 'oneway': 'oneway', 'smoothness': 'smoothness', 'name_sw': 'name_sw', 'railway': 'railway', 'depth': 'depth', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'pump': 'pump', 'landuse': 'landuse', 'amenity': 'amenity', 'barrier': 'barrier', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', });
lyr_Clipped_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_desa_selebaya_poly_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'power': 'power', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'width': 'width', 'name_fr': 'name_fr', 'military': 'military', 'building': 'building', 'covered': 'covered', 'isced_leve': 'isced_leve', 'operator': 'operator', 'place': 'place', 'healthcare': 'healthcare', 'admin_leve': 'admin_leve', 'natural': 'natural', 'access_roo': 'access_roo', 'is_in': 'is_in', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'name_en': 'name_en', 'backup_gen': 'backup_gen', 'communicat': 'communicat', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'leisure': 'leisure', 'name_sw': 'name_sw', 'railway': 'railway', 'smoothness': 'smoothness', 'depth': 'depth', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'government': 'government', 'population': 'population', 'operator_t': 'operator_t', 'rooms': 'rooms', 'boundary': 'boundary', 'status': 'status', 'pump': 'pump', 'historic': 'historic', 'network': 'network', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'tower': 'tower', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'communic_1': 'communic_1', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', 'fuel': 'fuel', });
lyr_desa_selebaya_point_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'layer': 'layer', 'tourism': 'tourism', 'health_fac': 'health_fac', 'office': 'office', 'tunnel': 'tunnel', 'man_made': 'man_made', 'aeroway': 'aeroway', 'capacity': 'capacity', 'parking': 'parking', 'staff_coun': 'staff_coun', 'roof_mater': 'roof_mater', 'power': 'power', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'width': 'width', 'name_fr': 'name_fr', 'military': 'military', 'building': 'building', 'covered': 'covered', 'isced_leve': 'isced_leve', 'operator': 'operator', 'place': 'place', 'healthcare': 'healthcare', 'admin_leve': 'admin_leve', 'natural': 'natural', 'access_roo': 'access_roo', 'is_in': 'is_in', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'religion': 'religion', 'beds': 'beds', 'shop': 'shop', 'staff_co_1': 'staff_co_1', 'name_en': 'name_en', 'backup_gen': 'backup_gen', 'communicat': 'communicat', 'building_m': 'building_m', 'oneway': 'oneway', 'opening_ho': 'opening_ho', 'waterway': 'waterway', 'leisure': 'leisure', 'name_sw': 'name_sw', 'railway': 'railway', 'smoothness': 'smoothness', 'depth': 'depth', 'toilets_di': 'toilets_di', 'medical_sy': 'medical_sy', 'blockage': 'blockage', 'name': 'name', 'bridge': 'bridge', 'government': 'government', 'population': 'population', 'operator_t': 'operator_t', 'rooms': 'rooms', 'boundary': 'boundary', 'status': 'status', 'pump': 'pump', 'historic': 'historic', 'network': 'network', 'addr_stree': 'addr_stree', 'denominati': 'denominati', 'landuse': 'landuse', 'tower': 'tower', 'toilets_ha': 'toilets_ha', 'amenity': 'amenity', 'barrier': 'barrier', 'health_f_2': 'health_f_2', 'access': 'access', 'communic_1': 'communic_1', 'highway': 'highway', 'surface': 'surface', 'diameter': 'diameter', 'water': 'water', 'public_tra': 'public_tra', 'fuel': 'fuel', });
lyr_BATASDESA_1.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_selebaya_line_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'width': 'TextEdit', 'name_fr': 'TextEdit', 'covered': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'natural': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'oneway': 'TextEdit', 'smoothness': 'TextEdit', 'name_sw': 'TextEdit', 'railway': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'pump': 'TextEdit', 'landuse': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_desa_selebaya_poly_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'office': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'power': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'name_fr': 'TextEdit', 'military': 'TextEdit', 'building': 'TextEdit', 'covered': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'place': 'TextEdit', 'healthcare': 'TextEdit', 'admin_leve': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'is_in': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'religion': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'name_en': 'TextEdit', 'backup_gen': 'TextEdit', 'communicat': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'leisure': 'TextEdit', 'name_sw': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'depth': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'government': 'TextEdit', 'population': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'boundary': 'TextEdit', 'status': 'TextEdit', 'pump': 'TextEdit', 'historic': 'TextEdit', 'network': 'TextEdit', 'addr_stree': 'TextEdit', 'denominati': 'TextEdit', 'landuse': 'TextEdit', 'tower': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'communic_1': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', 'fuel': 'TextEdit', });
lyr_desa_selebaya_point_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'layer': 'TextEdit', 'tourism': 'TextEdit', 'health_fac': 'TextEdit', 'office': 'TextEdit', 'tunnel': 'TextEdit', 'man_made': 'TextEdit', 'aeroway': 'TextEdit', 'capacity': 'TextEdit', 'parking': 'TextEdit', 'staff_coun': 'TextEdit', 'roof_mater': 'TextEdit', 'power': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'width': 'TextEdit', 'name_fr': 'TextEdit', 'military': 'TextEdit', 'building': 'TextEdit', 'covered': 'TextEdit', 'isced_leve': 'TextEdit', 'operator': 'TextEdit', 'place': 'TextEdit', 'healthcare': 'TextEdit', 'admin_leve': 'TextEdit', 'natural': 'TextEdit', 'access_roo': 'TextEdit', 'is_in': 'TextEdit', 'health_f_1': 'TextEdit', 'emergency': 'TextEdit', 'religion': 'TextEdit', 'beds': 'TextEdit', 'shop': 'TextEdit', 'staff_co_1': 'TextEdit', 'name_en': 'TextEdit', 'backup_gen': 'TextEdit', 'communicat': 'TextEdit', 'building_m': 'TextEdit', 'oneway': 'TextEdit', 'opening_ho': 'TextEdit', 'waterway': 'TextEdit', 'leisure': 'TextEdit', 'name_sw': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'depth': 'TextEdit', 'toilets_di': 'TextEdit', 'medical_sy': 'TextEdit', 'blockage': 'TextEdit', 'name': 'TextEdit', 'bridge': 'TextEdit', 'government': 'TextEdit', 'population': 'TextEdit', 'operator_t': 'TextEdit', 'rooms': 'TextEdit', 'boundary': 'TextEdit', 'status': 'TextEdit', 'pump': 'TextEdit', 'historic': 'TextEdit', 'network': 'TextEdit', 'addr_stree': 'TextEdit', 'denominati': 'TextEdit', 'landuse': 'TextEdit', 'tower': 'TextEdit', 'toilets_ha': 'TextEdit', 'amenity': 'TextEdit', 'barrier': 'TextEdit', 'health_f_2': 'TextEdit', 'access': 'TextEdit', 'communic_1': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'diameter': 'TextEdit', 'water': 'TextEdit', 'public_tra': 'TextEdit', 'fuel': 'TextEdit', });
lyr_BATASDESA_1.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_selebaya_line_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'width': 'no label', 'name_fr': 'no label', 'covered': 'no label', 'building': 'no label', 'operator': 'no label', 'natural': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'name_sw': 'no label', 'railway': 'no label', 'depth': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'pump': 'no label', 'landuse': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_desa_selebaya_poly_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'power': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'width': 'no label', 'name_fr': 'no label', 'military': 'no label', 'building': 'no label', 'covered': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'place': 'no label', 'healthcare': 'no label', 'admin_leve': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'is_in': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'name_en': 'no label', 'backup_gen': 'no label', 'communicat': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'leisure': 'no label', 'name_sw': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'depth': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'government': 'no label', 'population': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'boundary': 'no label', 'status': 'no label', 'pump': 'no label', 'historic': 'no label', 'network': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'tower': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'communic_1': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', 'fuel': 'no label', });
lyr_desa_selebaya_point_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'layer': 'no label', 'tourism': 'no label', 'health_fac': 'no label', 'office': 'no label', 'tunnel': 'no label', 'man_made': 'no label', 'aeroway': 'no label', 'capacity': 'no label', 'parking': 'no label', 'staff_coun': 'no label', 'roof_mater': 'no label', 'power': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'width': 'no label', 'name_fr': 'no label', 'military': 'no label', 'building': 'no label', 'covered': 'no label', 'isced_leve': 'no label', 'operator': 'no label', 'place': 'no label', 'healthcare': 'no label', 'admin_leve': 'no label', 'natural': 'no label', 'access_roo': 'no label', 'is_in': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'religion': 'no label', 'beds': 'no label', 'shop': 'no label', 'staff_co_1': 'no label', 'name_en': 'no label', 'backup_gen': 'no label', 'communicat': 'no label', 'building_m': 'no label', 'oneway': 'no label', 'opening_ho': 'no label', 'waterway': 'no label', 'leisure': 'no label', 'name_sw': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'depth': 'no label', 'toilets_di': 'no label', 'medical_sy': 'no label', 'blockage': 'no label', 'name': 'no label', 'bridge': 'no label', 'government': 'no label', 'population': 'no label', 'operator_t': 'no label', 'rooms': 'no label', 'boundary': 'no label', 'status': 'no label', 'pump': 'no label', 'historic': 'no label', 'network': 'no label', 'addr_stree': 'no label', 'denominati': 'no label', 'landuse': 'no label', 'tower': 'no label', 'toilets_ha': 'no label', 'amenity': 'no label', 'barrier': 'no label', 'health_f_2': 'no label', 'access': 'no label', 'communic_1': 'no label', 'highway': 'no label', 'surface': 'no label', 'diameter': 'no label', 'water': 'no label', 'public_tra': 'no label', 'fuel': 'no label', });
lyr_desa_selebaya_point_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});