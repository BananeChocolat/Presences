const presence = new Presence({
  clientId: "800773457129635852"
});

let browsingStamp = Math.floor(Date.now() / 1000);

let user: any;
let title: any;
let replace: any;
let search: any;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "lxg"
  };
  
  if (document.location.hostname == "littlexgarden.com") {
    if (document.location.pathname == "/") {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = "Visite la page d'accueil";
    }
    
    else if (document.location.pathname.includes("/one-piece")) {
      title = document.querySelector("title");
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = "Lis sur Little Garden :";
      presenceData.state = title.innerText;
    }
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});
