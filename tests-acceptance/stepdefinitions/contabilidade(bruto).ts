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

    Given(/^o pedido "([^\"]*)" possui um valor bruto de R$ "([^\"]*)"$/, async (cod, valor) => {
        //Cadastrar cliente 
        //Cadastrar produto 
        //Cadastrar pedido
    });

    Given(/^o pedido "([^\"]*)" possui um valor bruto de R$ "([^\"]*)"$/, async (cod, valor) => {
        //Cadastrar cliente 
        //Cadastrar produto 
        //Cadastrar pedido
    });

    Given(/^o pedido "([^\"]*)" possui um valor bruto de R$ "([^\"]*)"$/, async (cod, valor) => {
        //Cadastrar cliente 
        //Cadastrar produto 
        //Cadastrar pedido
    });

    Then(/^ Eu verei no campo bruto o valor R$ "([^\"]*)" $/, async (valor) => {
        //verificar o campo de bruto
        /*expect(await element(by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.true;*/
    });

}) 