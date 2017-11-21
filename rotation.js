
function geoOffer( offer, track1 = "track1", track2 = "track2", external = false )
{
    if (external)
    {
      return location.href = offer;
    }
    
    return location.href = "http://www.rotationurls.com/offer/29668|"
    +offer+"?data1="
    +track1+"&data2="
    +track2+"&tag={clickid}";

}

// Diccionary offer
  //Sales
  var offer_brezzers = "15578";
  //Leads
  var offer_default = "14466";
  var externalOffer_US = "15090";
  var offer_DE = "15090";
  var offer_CH = "16269";
  var offer_FR = "16104";
  var offer_AT = "16215";
  var offer_AU = "16326";
  var offer_UK = "16267";
  var offer_SE = "16330";
  var offer_CA = "16327";


function determineCountry(data)
{
  switch(data.address.country_code)
  {
     case "CA":
     case "UK":
     case "DE":
     case "NZ":
       // type CPS
       geoOffer(offer_brezzers,'snapchat','sale');
     break;

     case "US":
       // type Sign Up
       geoOffer(externalOffer_US, null, null, true);
     break;

     case "DE":
       // type Sign Up
       geoOffer(offer_DE,'snapchat','lead');
     break;

     case "AU":
       // type Sign Up
       geoOffer(offer_AU,'snapchat','lead');
     break;

     case "CA":
       // type Sign Up
       geoOffer(offer_CA,'snapchat','lead');
     break;

     case "CH":
       // type Sign Up
       geoOffer(offer_CH,'snapchat','lead');
     break;

     case "FR":
       // type Sign Up
       geoOffer(offer_FR,'snapchat','lead');
     break;

     default:
       // type Sign Up
       geoOffer(offer_brezzers,'snapchat','default');
     break;           
  }    
}

function smartlink()
{
    geoOffer(offer_brezzers,'snapchat','sale');
}
smartlink();
