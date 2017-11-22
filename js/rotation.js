
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
  var offer_Sales = "16340";
  //Leads
  var offer_default = "14454";
  var externalOffer_US = "http://www.hookupcougars.com?ainfo=NTE1NzR8MzA3N3ww";
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
       // type CPS
       geoOffer(offer_default,'snapchat','sale');
     break;

     case "NZ":
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
       geoOffer(offer_default,'snapchat','default');
     break;           
  }    
}

function smartlink()
{
    geoOffer('http://www.bundasnovinhas.com/?sl=936821-a577b&data1=Track1&data2=Track2&tag={clickid}&website={subID}&placement={sub_subID}', null, null, true);
}
smartlink();
