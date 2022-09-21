CREATE TABLE Task (
 	id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
 	description text, 
 	createdAt  date not null default CURRENT_DATE,
	dueDate date,
	status char(20),
	list varchar(50)
);

