// checks the url for viruses with virustotal
const apiKey = "f314054176a273be8a8930ab2ab1bbd0317dde7777855c86127039e54070d57b"

async function isSafe(url) {
    const response = await fetch(`https://www.virustotal.com/api/v3/urls?url=${encodeURIComponent(url)}`, {
        method: "POST",
        headers: {
            "X-Apikey": apiKey
        }
    });
    const json = await response.json();
    return json;
}

let safe = fetch(isSafe(window.location.href)["data"]["links"]["self"], {
    method: "GET",
    headers: {
        "X-Apikey": apiKey
    }
})["data"]["attributes"]["stats"]["malicious"] === 0;

if(!safe) {
    window.location.href = "https://olsite.dev/SecureKids/unsafe.html?url=" + window.location.href;
}