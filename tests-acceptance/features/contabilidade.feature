Feature: As Usuário do sistema
		 I want to Ter um quantitativo de valor para as vendas
		 So that Eu posso ter uma noção do valor total faturado e do valor total sem os descontos aplicados

Scenario: Valor do lucro é calculado corretamente
Given Estou na página de “Contabilidade”
Given O pedido “001” teve um valor bruto de R$ "1000";
Given O pedido “002” teve um valor bruto de R$ "200";
Given O pedido “003” teve um valor bruto de R$ "500";
Given O pedido “001” recebeu um desconto total de R$ “60,00”
Given O pedido “002” recebeu um desconto de “15” %
Then Eu verei no campo "lucro total dos pedidos” o valor R$ ”1610,00”

Scenario: Valor bruto é calculado corretamente
Given Estou na página de “Contabilidade”
Given O pedido “001” teve um valor bruto de R$ "1000";
Given O pedido “002” teve um valor bruto de R$ "200";
Given O pedido “003” teve um valor bruto de R$ "500";
Then Eu verei no campo "bruto total dos pedidos” o valor R$ "1700,00”

