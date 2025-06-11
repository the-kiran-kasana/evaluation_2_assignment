function App(name, version, features) {
  this.name = name;
  this.version = version;
  this.features = features;
}

App.prototype.getSummary = function () {
  return this.name + " v" + this.version + " supports: " + this.features.join(", ");
};


function VersionTwoApp(name, version, features, releaseYear, newFeatures) {
  App.call(this, name, version, features);
  this.releaseYear = releaseYear;
  this.newFeatures = newFeatures;
}

VersionTwoApp.prototype = Object.create(App.prototype);
VersionTwoApp.prototype.constructor = VersionTwoApp;


VersionTwoApp.prototype.getSummary = function () {
  return this.name + " v" + this.version + " (" + this.releaseYear + ") adds: " + this.newFeatures.join(", ");
};

VersionTwoApp.prototype.addFeature = function (feature) {
  this.newFeatures.push(feature);
};


let app1 = new App("PhotoSnap", "1.0", ["Login", "Upload"]);
console.log(app1.getSummary());


let app2 = new VersionTwoApp("PhotoSnap", "2.0", ["Login", "Upload"], 2023, ["Dark Mode"]);
app2.addFeature("Filters");

console.log(app2.getSummary());




let allFeatures = app1.features.concat(app2.newFeatures);
let uniqueToV2 = app2.newFeatures.filter(f => !app1.features.includes(f));

console.log("Total Features:", allFeatures.length); 
console.log("All Features:", allFeatures); 
console.log("Unique to V2:", uniqueToV2); 
