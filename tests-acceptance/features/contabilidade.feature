Feature: As Usuário do sistema
		 I want to Ter um quantitativo de valor para as vendas
		 So that Eu posso ter uma noção do valor total faturado e do valor total sem os descontos aplicados

Scenario: Quantidativo de preços é calculado corretamente
Given Estou na página de “Histórico de pedidos”
Given O pedido “001” foi “12” Kg de “salmão” que custa R$ “50,00” o Kg
Given O pedido “001” foi “15” Kg de “camarão” que custa R$ ”15,00” o Kg  
Given O pedido “001” foi “30” Kg de “caranguejo” que custa R$ “9” o Kg
Given O pedido “002” foi “10” Kg de “Salmão” que custa R$ “50,00” o Kg
Given O pedido “003” foi “5” Kg de “Salmão” que custa R$ “50,00” o Kg
Given O pedido “001” recebeu um desconto total de R$ “60,00”
Given O pedido “002” recebeu um desconto de “15” %
Then  Eu verei no campo “valor total dos pedidos” o valor R$ ”1710,00”

