var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var presence = new Presence({
    clientId: "619286440353726465",
    mediaKeys: false
});
var browsingStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", () => __awaiter(this, void 0, void 0, function* () {
    let data = {
        largeImageKey: "tvtime-logo"
    };
    if (document.location.pathname == ("/en") ||
        document.location.pathname == ("/fr") ||
        document.location.pathname == ("/es") ||
        document.location.pathname == ("/it") ||
        document.location.pathname == ("/pt_PT") ||
        document.location.pathname == ("/pt_BR") ||
        document.location.pathname == ("/de")) {
        data.details = "Viewing Watchlist",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/calendar")) {
        data.details = "Viewing Calendar",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/upcoming")) {
        data.details = "Viewing Upcoming Episodes",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/profile")) {
        var user = document.querySelector(".profile-infos h1.name").textContent.split("Follow")[0];
        data.details = "Viewing a User Profile",
            data.state = user,
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/account")) {
        data.details = "Viewing Account Details",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.includes("/show")) {
        if (document.location.pathname.includes("/episode/")) {
            var showname = document.querySelector("div.episode-infos.extended div.basic-infos span").textContent;
            var shownumber = document.querySelector("div.info-box h1 .episode-label").textContent;
            data.details = "Viewing an Episode",
                data.state = shownumber + " - " + showname;
            data.startTimestamp = browsingStamp;
            presence.setActivity(data);
        }
        else if (document.location.pathname.endsWith("/explore")) {
            data.details = "Browsing TV Shows",
                data.startTimestamp = browsingStamp;
            presence.setActivity(data);
        }
        else {
            var show = document.querySelector("div.info-box.heading-info h1").textContent;
            data.details = "Viewing a TV Show",
                data.state = show;
            data.startTimestamp = browsingStamp;
            presence.setActivity(data);
        }
    }
    else if (document.location.pathname.includes("/actor/")) {
        var actor = document.querySelector("div#actor-details div.infos h1").textContent;
        data.details = "Viewing an Actor Profile",
            data.state = actor;
        data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/about")) {
        data.details = "Viewing the About Page",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/privacy")) {
        data.details = "Viewing the Privacy Policy",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/terms")) {
        data.details = "Viewing the Terms of Service",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/special-thanks")) {
        data.details = "Viewing the Credits",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.endsWith("/podcasts")) {
        data.details = "Viewing the Podcasts Page",
            data.startTimestamp = browsingStamp;
        presence.setActivity(data);
    }
    else if (document.location.pathname.includes("/article")) {
        if (document.location.pathname.endsWith("/articles")) {
            data.details = "Browsing Articles",
                data.startTimestamp = browsingStamp;
            presence.setActivity(data);
        }
        else {
            var article = document.querySelector("div.article h1.page-header").textContent;
            ;
            data.details = "Viewing an Article",
                data.state = article;
            data.startTimestamp = browsingStamp;
            presence.setActivity(data);
        }
    }
    ;
}));