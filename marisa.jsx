docObj = activeDocument;
var faces = ["怒", "乗っ取り", "困惑", "欲情", "通常"];
var options = ["back hair","boots"];


for(var i=0; i < faces.length; i++){
    for(var j=0; j < faces.length; j++){
         docObj.layerSets["character"].layerSets["Face"].layers[faces[j]].visible = false;
        }
    docObj.layerSets["character"].layerSets["Face"].layers[faces[i]].visible = true;

    docObj.layerSets["character"].layers[options[0]].visible = true;
    docObj.layerSets["character"].layers[options[1]].visible = true;
    fileObj = new File("~/tmp/" + faces[i] + "hair-boots.jpg");
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 10;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
    
    docObj.layerSets["character"].layers[options[0]].visible = true;
    docObj.layerSets["character"].layers[options[1]].visible = false;
    fileObj = new File("~/tmp/" + faces[i] + "hair-noboots.jpg");
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 10;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
 
    docObj.layerSets["character"].layers[options[0]].visible = false;
    docObj.layerSets["character"].layers[options[1]].visible = true;
    fileObj = new File("~/tmp/" + faces[i] + "nohair-boots.jpg");
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 10;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
 
    docObj.layerSets["character"].layers[options[0]].visible = false;
    docObj.layerSets["character"].layers[options[1]].visible = false;
    fileObj = new File("~/tmp/" + faces[i] + "nohair-noboots.jpg");
    jpegOpt = new JPEGSaveOptions();
    jpegOpt.embedColorProfile = true;
    jpegOpt.quality = 10;
    jpegOpt.formatOptions = FormatOptions.PROGRESSIVE;
    jpegOpt.scans = 3;
    jpegOpt.matte = MatteType.NONE;
    activeDocument.saveAs(fileObj, jpegOpt, true, Extension.LOWERCASE);
    }
