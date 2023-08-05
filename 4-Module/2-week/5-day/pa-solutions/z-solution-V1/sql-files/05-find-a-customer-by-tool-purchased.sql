SELECT first_name, last_name, phone_number FROM customers
WHERE id = (
    SELECT purchases.customer_id FROM purchases
    JOIN tools on (purchases.tool_id = tools.id)
    WHERE tools.name = 'Pipe Cutter'
    ORDER BY purchases.id DESC
    LIMIT 1
);