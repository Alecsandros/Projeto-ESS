import { defineSupportCode } from 'cucumber';
 import { browser, $, element, ElementArrayFinder, by } from 'protractor';
 let chai = require('chai').use(require('chai-as-promised'));
 let expect = chai.expect;
 
 let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));
 let mesmocod = ((elem, cod) => elem.element(by.name('codlist')).getText().then(text => text === cod));
 
 
 defineSupportCode(function ({ Given, When, Then }) {
     Given(/^estou na página de Contabilidade $/, async () => {
        await browser.get("http://localhost:4200/");
         await expect(browser.getTitle()).to.eventually.equal('ApGui');
         await $("a[name='Contabilidade']").click();
     })
 
     When(/^preencho o campo "([^\"]*)" com "([^\"]*)"$/, async (campo, valor) => {
         var c = <string> campo;
         var box = c.replace(/\s/g, '_')  "box";
         await $("input[name="  box  "]").sendKeys(<string> valor);
     });
 
     When(/^seleciono "([^\"]*)" para o campo "([^\"]*)"$/, async (item, campo) => {
         var c = <string> campo;
         var box = c.replace(/\s/g, '_')  "box";
         await $(`select#${box} option[value="${<string> item}"]`).click()
     });
 
     When(/^finalizo o cadastro$/, async () => {
        await $("button#Cadastrar").click();
     });
 
     Then(/^o produto com código "([^\"]*)" agora aparece na categoria "([^\"]*)" na listagem de produtos$/, async (cod, cat) => {
         expect(await element(by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.true;
     });
 
 }) 