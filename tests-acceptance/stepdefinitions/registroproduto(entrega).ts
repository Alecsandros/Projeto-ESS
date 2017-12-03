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
        await $("a[name='Produtod Pendentes']").click();
    })

    Given(/^o valor atual do lucro e peso do "([^\"]*)" é R$ "([^\"]*)" e "([^\"]*)" Kg respectivamente $/, async (produto, valor, peso) => {
        //Cadastrar o produto
    });

    Given(/^o pedido  "([^\"]*)" foi R$ "([^\"]*)" de "([^\"]*)" $/, async (cod, valor) => {
        //Cadastrar cliente 
        //Cadastrar pedido
    });

    Given(/^o pedido "([^\"]*)" recebeu um desconto de R$ "([^\"]*)"$/, async (cod, valor) => {
        //verificar se o desconto é igual
    });

    Given(/^o pedido "([^\"]*)" recebeu um desconto de "([^\"]*)" % $/, async (cod, valor) => {
        //verificar se o desconto é igual
    });

    When(/^eu selecionar a opção Contabilidade % $/, async () => {
        await $("button#Contabilidade").click();
    });

    Then(/^ Eu verei no campo Peso do produto "([^\"]*)" o valor "([^\"]*)" KG $/, async (produto, peso) => {
        //verificar o campo de peso
        /*expect(await element(by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.true;*/
    });

    Then(/^ Eu verei no campo lucro do produto "([^\"]*)" o valor "([^\"]*)" KG $/, async (produto, valor) => {
        //verificar o campo de lucro
        /*expect(await element(by.css(`table#${cat}-table tbody tr#id-${cod}`)).isPresent()).to.be.true;*/
    });

}) 