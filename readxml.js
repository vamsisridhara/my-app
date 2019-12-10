const xml2js = require('xml2js');
const fs = require('fs');
const targetparser = new xml2js.Parser();
const parser = new xml2js.Parser({ attrkey: "ATTR" });
const exceljs = require('exceljs');
//var xml2json = require('xml2json');
let xml_string = fs.readFileSync("test.xlf", "utf8");

targetparser.parseString(xml_string, function(error, result) {
    if (error) {
        console.log(error);
    }
    //write new xlf file with empty target

    // create a new builder object and then convert
    // our json back to xml.
    var json = result;
    console.log(json);
    var builder = new xml2js.Builder({ 'pretty': true,'trim': true, 'indent': ' ', 'newline': '\n' });
    var xml = builder.buildObject(json);
    console.log(xml);
    fs.writeFile("test-target.xlf", xml.replace('&#xD;',''), 
      function(err, data) {
      if (err) console.log(err);
      console.log("successfully written our update xml to file");
    });

});

parser.parseString(xml_string, function(error, result) {
    if (error) {
        console.log(error);
    }
    //var json = JSON.parse(xml2json.toJson(result, {reversible: true}));
    //console.log(json);
    //generate xlsx file from xlf file
    let finalArray = [];
    var transUnits = result.xliff.file[0].body;
    transUnits.forEach(x => {
      var transUnit = x['trans-unit'];
      transUnit.forEach(y => {
        finalArray.push({
          id: y.ATTR.id,
          source: y.source[0].replace(/(\r\n|\n|\r)/gm,"").trim(),
          target: ''
        })
      });
    });
    var workbook = new exceljs.Workbook();
    var worksheet = workbook.addWorksheet('My Sheet');
    worksheet.state = 'visible';
    worksheet.columns = [
      { header: 'Id', key: 'id', width: 30 },
      { header: 'Source', key: 'source', width: 50 },
      { header: 'Target', key: 'target', width: 50 }
    ];
    worksheet.addRows(finalArray);
    workbook.xlsx.writeFile('export.xlsx');
});