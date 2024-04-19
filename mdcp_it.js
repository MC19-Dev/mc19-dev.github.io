document.cookie = "session=test GDPR";
document.cookie = "favorite_task=collect Data";

function alertCookie() { 
  alert(document.cookie); 
}

document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";
document.cookie = "reader=1; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById("cookies");
  output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookies");
  output.textContent = "";
}

const cookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("favorite_task="))
  ?.split("=")[1];

function showCookieValue() {
  const output = document.getElementById("cookie-value");
  output.textContent = `> The "favorite_task cookie has value: ${cookieValue}`;
}

function doOnce() {
  if (
    !document.cookie
      .split("; ")
      .find((row) => row.startsWith("session"))
  ) {
    document.cookie =
      "session=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";

    const output = document.getElementById("do-once");
    output.textContent = "> Updated session cookie data!";
  }
}

function clearOutputDoOnce() {
  const output = document.getElementById("do-once");
  output.textContent = "";
}

function resetOnce() {
  document.cookie =
    "session=Test GDPR; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";

  const output = document.getElementById("reset-once");
  output.textContent = "> Reset session cookie!";
}

function checkACookieExists() {
  if (
    document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
  ) {
    const output = document.getElementById("a-cookie-existence");
    output.textContent = '> The cookie "reader" exists';
  }
}

function clearOutputACookieExists() {
  const output = document.getElementById("a-cookie-existence");
  output.textContent = "";
}

function checkCookieHasASpecificValue() {
  if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
    const output = document.getElementById("a-specific-value-of-the-cookie");
    output.textContent = '> The cookie "reader" has a value of "1"';
  }
}

function clearASpecificValueOfTheCookie() {
  const output = document.getElementById("a-specific-value-of-the-cookie");
  output.textContent = "";
}
