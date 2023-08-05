SELECT purchases.tool_name, tools.price, purchases.quantity FROM purchases
JOIN tools ON (purchases.tool_name = tools.name)
WHERE purchases.tool_name LIKE 'Pipe%'
-- GROUP BY tool_name
ORDER BY purchases.tool_name, quantity;