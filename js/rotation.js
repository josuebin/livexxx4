function loadScript( id, src, callback ) 
{
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", src + "?callback=" + callback);
    script.setAttribute("id", id);
    document.getElementsByTagName("head")[0].appendChild(script);

} loadScript('geoIp', 'https://freegeoip.net/json', 'determineCountry' );


//-------------------------------------------------------------------------------------
// Offer helper
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


//------------------------------------------------------------------------------------
// Diccionary offer
//Sales
var offer_Sales = "16340";
//Leads
var offer_default = "https://sx.leadzutw.com/?m=1GK9SITE68141X5&a=";
var externalOffer_US = "http://www.hookupcougars.com?ainfo=NTE1NzR8MzA3N3ww";
var offer_DE = "15090";
var offer_CH = "16269";
var offer_FR = "16104";
var offer_AT = "16215";
var offer_AU = "16326";
var offer_GB = "16267";
var offer_SE = "16330";
var offer_CA = "16327";


//------------------------------------------------------------------------------------
// Rotate offer by geo CODE
function determineCountry(data)
{
  switch(data.country_code)
  {
     case "AU":
     case "CA":
     case "NZ":
     case "US":
       // type Sign Up
       alert('Only for men between 25 and 65 years old 😍👿🔥');
       geoOffer(externalOffer_US, null, null, true);
     break;

     default:
       // type Sign Up
       geoOffer(offer_default,null,null,true);
     break;           
  }    
}


//------------------------------------------------------------------------------------
// Only run if dont auto redirect to offer
function smartlink()
{
   geoOffer(offer_default,'snapchat','default');
}

