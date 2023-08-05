-- tools with name starting with Pipe, name, price, quantitiy
-- order alpha, quantity

SELECT tools.name, tools.price, purchases.quantity
FROM purchases
JOIN tools
ON (purchases.tool_name = tools.name)
WHERE tools.name LIKE 'Pipe%'
ORDER BY tools.name, purchases.quantity;