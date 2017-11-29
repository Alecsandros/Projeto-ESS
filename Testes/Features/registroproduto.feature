Feature: As Usuário do sistema
		 I want to Ter uma lista de todos os produtos cadastrados
		 So that Eu posso ter controle quantitativo dos produtos entregues na minha loja


Scenario: Valor do desconto total de cada produto é calculado corretamente
Given Estou na página de “Histórico de Produtos”
And O “salmão” custa “R$ 50,00 o Kg’
And O pedido “001” foi “12 Kg” de “Salmão”
And O pedido “002” foi “10Kg” de “Salmão”
And O pedido “003” foi “5Kg” de “Salmão”
And O pedido “001” recebeu um desconto no “salmão” de “R$20,00”
And O pedido “002” recebeu um desconto de “15%”
When Eu selecionar a opção “Salmão”
Then Eu verei no campo “Valor total com desconto” do produto “Salmão” o valor “R$1255,00”

Scenario: Somatório do peso de cada produto é calculado corretamente
Given Estou na página de “Histórico de produtos”.
And O pedido “001” foi “12 Kg” de “Salmão”.
And O pedido “002” foi “10Kg” de “Salmão”
And O pedido “003” foi “5Kg” de “Salmão”
When Eu selecionar a opção “Salmão”
Then Eu verei no campo “Peso total” do produto “Salmão”  o valor “27Kg”

Scenario: Pedido ao ser entregue aparece no histórico de produtos.
Given Estou na página de “Pedidos pendentes”
And O peso total dos salmões é “150” Kg.
And O valor total dos salmões com desconto 7000 é “
And O pedido “001”  do cliente “joão” foi “12 Kg” de “Salmão”
And O pedido “001” recebeu um desconto no “salmão” de “R$20,00”
When Eu selecionar a opção “entregue”
And Eu selecionar a opção “Histórico de produtos”.
Then Eu verei o campo peso total de salmões com o valor “162” Kg
And Eu verei o campo valor total de salmões com desconto com o valor R$ “7580”. 
