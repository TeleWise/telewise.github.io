function serviceProvider() {
  var answer = prompt("Who is your service provider currently?");
  if(answer.toUpperCase()==="MTN"){

      document.write("<h1>Tips for MTN users</h1>");
      document.write("<h2>If you plan on staying with this service provider, or even if you're new to this sevice provider, it is important to choose the best data or airtime package to suit your needs and financial position. <h2>");
      document.write("The table below displays some examples of good deals, and also how to input it into your phone. ");
      document.write("<table align ='center' style = border-spacing: 10px>");
      document.write("<th style = text-align: left>");
      document.write("</style>");
      document.write("<tr>");
      document.write("<th align = 'left'<h3>Price plan</h3></th>");
      document.write("<th><h3>USSD to change</h3></th>");
      document.write("</tr>");
      document.write("<tr>");
      document.write("<tr>");
      document.write("<td>MTN talk free</td>");
      document.write("<td>*141*4*2#</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<td>Pulse</td>");
      document.write("<td>*141*4*3#</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<td>Pay per second</td>");
      document.write("<td>*141*4*4#</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<td>Zone per second</td>");
      document.write("<td>*141*4*1#</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<td>Muziq</td>");
      document.write("<td>*141*4*3#");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<td>Call per second</td>");
      document.write("<td>*141*4#</td>");
      document.write("</tr>");

      document.write("<tr>");
      document.write("<td>Base</td>");
      document.write("<td>*141*4#</td>");
      document.write("</tr>");

      document.write("</table>");

      document.write("<h1>Steps to change service providers</h1>");
      document.write("<ol>");
      document.write("<li><h3>Whenever you are changing service providers, you'll need your ID, and proof of residence that is not older than 3 months to validate your SIM card.</h3></li>");
      document.write("<li><h3>Do not cancel your service with your current service provider before contacting the new one - the one you want.</h3></li>");
      document.write("<li><h3>Once you have contacted your new service provider, they will ask a bunch of questions, like details of your address, name, customer account number, and your account password.</h3></li>");
      document.write("<li><h3>If you want to keep your current mobile device, you'll need the ESN/IMEI number, located at the back of your phone, or under its battery.</h3></li>");
      document.write("<li><h3>Your new provider will contact your current provider and start the porting process.</h3></li>");
      document.write("<li><h3>Then you'll have to wait for your new service to start.</h3></li>");
      document.write("<li><h3>Once your new service is activated, your existing service should be automatically cancelled.</h3></li>");
      document.write("<li><h3>If you have any outstanding debt with your previous service provider, you will receive the bill within the month.</h3></li>");
      document.write("</ol>");

      document.write("<h4>If you want to find out about the latest promotions from MTN, click the link below: </h4>");
      document.write("<a href = 'https://shop.mtn.co.za/crs/siteInformation/staticPage.jsp?breadcrumb=PayAsYouGo%20Promos&siteInformation=PromoPayAsYouGo'>MTN Promotions</a>");


  }
  else if(answer.toUpperCase()==="VODACOM"){
    document.write("<h1>Tips for Vodacom users</h1>");

    document.write("<h2>If you plan on staying with this service provider, or even if you're new to this sevice provider, it is important to choose the best data or airtime package to suit your needs and financial position. <h2>");
    document.write("The table below displays some examples of good deals, and also how to input it into your phone.");

    document.write("<table>");
    document.write("<table align ='center'>");
    document.write("<th style = text-align: left style = border-spacing: 10px>");
    document.write("</style>");
    document.write("<tr>");
    document.write("<th>Price plan</th>");
    document.write("<th>USSD to change</th>");
    document.write("<th>Follow the code</th>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<tr>");
    document.write("<td>Vodacom Prepaid 79c</td>");
    document.write("<td>*111#</td>");
    document.write("<td>10/3/1/3/1</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>Daily free calls</td>");
    document.write("<td>*111#</td>");
    document.write("<td>10/3/1/2</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>Anytime Per Second</td>");
    document.write("<td>*111#</td>");
    document.write("<td>10/3/1/1</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>Vodacom 4 Less</td>");
    document.write("<td>*111#</td>");
    document.write("<td>10/3/1/2</td>");
    document.write("</tr>");

    document.write("</table>");


    document.write("<h1>Steps to change service providers</h1>");

    document.write("<ol>");
    document.write("<li><h4>Whenever you are changing service providers, you'll need your ID, and proof of residence that is not older than 3 months to validate your SIM card.</h4></li>");
    document.write("<li><h4>Do not cancel your service with your current service provider before contacting the new one - the one you want.</h4></li>");
    document.write("<li><h4>Once you have contacted your new service provider, they will ask a bunch of questions, like details of your address, name, customer account number, and your account password.</h4></li>");
    document.write("<li><h4>If you want to keep your current mobile device, you'll need the ESN/IMEI number, located at the back of your phone, or under its battery.</h4></li>");
    document.write("<li><h4>Your new provider will contact your current provider and start the porting process.</h4></li>");
    document.write("<li><h4>Then you'll have to wait for your new service to start.</h4></li>");
    document.write("<li><h4>Once your new service is activated, your existing service should be automatically cancelled.</h4></li>");
    document.write("<li><h4>If you have any outstanding debt with your previous service provider, you will receive the bill within the month.</h4></li>");
    document.write("</ol>");

    document.write("<h4>If you want to find out about the latest promotions from Vodacom, click the link below: </h4>");
    document.write("<a href = 'http://www.vodacom.co.za/mobile/main/promotion/'>Vodacom promotions</a>");
  }
  else if(answer.toUpperCase()=="CELL C"){
        document.write("<h1>Tips for Cell C users</h1>");

        document.write("<h2>If you plan on staying with this service provider, or even if you're new to this sevice provider, it is important to choose the best data or airtime package to suit your needs and financial position. <h2>");
        document.write("The table below displays some examples of good deals, and also how to input it into your phone.");

        document.write("<table align ='center'>");
        document.write("<th style = text-align: left style = border-spacing: 10px>");
        document.write("</style>");
        document.write("<tr>");
        document.write("<th>Price plan</th>");
        document.write("<th>USSD to change</th>");
        document.write("<th>Follow the code</th>");
        document.write("</tr>");
        document.write("<tr>")
        document.write("<tr>")
        document.write("<td>66c</td>");
        document.write("<td>*108#</td>");
        document.write("<td>2</td>");
        document.write("</tr>");

        document.write("<tr>");
        document.write("<td>Supercharge</td>");
        document.write("<td>*108#</td>");
        document.write("<td>3</td>");
        document.write("</tr>");

        document.write("<tr>");
        document.write("<td>Megabonus</td>");
        document.write("<td>*108#</td>");
        document.write("<td>1</td>");
        document.write("</tr>");

        document.write("<tr>");
        document.write("<td>Woza Weekend</td>");
        document.write("<td>*108#</td>");
        document.write("<td>8</td>");
        document.write("</tr>");

        document.write("<tr>");
        document.write("<td>Trace Mobile</td>");
        document.write("<td>*108#</td>");
        document.write("<td>5</td>");

        document.write("<tr>");
        document.write("<td>Sharks Mobile</td>");
        document.write("<td>*108#</td>");
        document.write("<td>4</td>");

        document.write("</table>");

        document.write("<h1>Steps to change service providers</h1>");

        document.write("<ol>");
        document.write("<li><h4>Whenever you are changing service providers, you'll need your ID, and proof of residence that is not older than 3 months to validate your SIM card.</h4></li>");
        document.write("<li><h4>Do not cancel your service with your current service provider before contacting the new one - the one you want.</h4></li>");
        document.write("<li><h4>Once you have contacted your new service provider, they will ask a bunch of questions, like details of your address, name, customer account number, and your account password.</h4></li>");
        document.write("<li><h4>If you want to keep your current mobile device, you'll need the ESN/IMEI number, located at the back of your phone, or under its battery.</h4></li>");
        document.write("<li><h4>Your new provider will contact your current provider and start the porting process.</h4></li>");
        document.write("<li><h4>Then you'll have to wait for your new service to start.</h4></li>");
        document.write("<li><h4>Once your new service is activated, your existing service should be automatically cancelled.</h4></li>");
        document.write("<li><h4>If you have any outstanding debt with your previous service provider, you will receive the bill within the month.</h4></li>");
        document.write("</ol>");

        document.write("<h4>If you want to find out about the latest promotions from Cell C, click the link below: </h4>");
        document.write("<a href = 'https://www.cellc.co.za/cellc/data-contracts'>Cell C promotions</a>");

  }
  else{
    document.write("The information you require is unavailable right now.");
  }
}
serviceProvider();
