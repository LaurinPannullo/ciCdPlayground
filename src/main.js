import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Laurin Pannullo",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["broken pipelines", "fast feedback", "automated testing"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, GitHub actions",
    // What do you want to learn in this workshop?
    expectations: ["learn how to set up CI/CD pipelines"],
  },
});
