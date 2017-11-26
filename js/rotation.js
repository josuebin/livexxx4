//-------------------------------------------------------------------------------------
// Offer helper
var device = navigator.userAgent

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
var offer_default = "http://www.rotationurls.com/offer/29668|16267?data1=snpachat&data2=snapchat&tag={clickid}&website={subID}&placement={sub_subID}";
var externalOffer_US = "http://www.hookupcougars.com?ainfo=NTE1NzR8MzA3N3ww&skin=262&i=1";
var externalOffer_US_mobile = "http://mobile.hookupcougars.com?ainfo=NTE1NzR8MzA4MXww&skin=41&i=1";
var offer_DE = "15090";
var offer_CH = "16269";
var offer_FR = "16104";
var offer_AT = "16215";
var offer_AU = "16326";
var offer_GB = "16267";
var offer_SE = "16330";
var offer_CA = "16327";
var offer_ES = "http://track.toroadvertising.com/?aff_id=3652&offer_id=6342";


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
     	// DatingGold
		if (device.match(/Iphone/i)|| 
			device.match(/Ipod/i)|| 
			device.match(/Android/i)|| 
			device.match(/J2ME/i)|| 
			device.match(/BlackBerry/i)|| 
			device.match(/iPhone|iPad|iPod/i)|| 
			device.match(/Opera Mini/i)|| 
			device.match(/IEMobile/i)|| 
			device.match(/Mobile/i)|| 
			device.match(/Windows Phone/i)|| 
			device.match(/windows mobile/i)|| 
			device.match(/windows ce/i)|| 
			device.match(/webOS/i)|| 
			device.match(/palm/i)|| 
			device.match(/bada/i)|| 
			device.match(/series60/i)|| 
			device.match(/nokia/i)|| 
			device.match(/symbian/i)|| 
			device.match(/HTC/i))
		{
			geoOffer(externalOffer_US_mobile, null, null, true);
		}else
		{
       		geoOffer(externalOffer_US, null, null, true);
		}
     break;

     case "ES":
       geoOffer(offer_ES, null, null, true);
     break;

     default:
       geoOffer(offer_default,null,null,true);
     break;           
  }    
}


//------------------------------------------------------------------------------------
// Only run if dont auto redirect to offer
function smartlink()
{
   geoOffer(offer_default,null,null,true);
}

