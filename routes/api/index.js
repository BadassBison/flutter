const data = {
    routes: [
        "employees",
        "customers",
        "partners",
        "comments"
    ],
    parse: parseTypes
}

function parseTypes(route, req, res) {
    
    let newEntry;
    switch(route){
        
        // Employees schema ------------------------------------------------------------------
        case 'employees':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
                position: req.body.position || "employee"
            }
        
            // Validations
            if(!newEntry.name || !newEntry.email) {
                return res.status(400).json({ msg: 'Please include a name and email' });
            }


        // Customers schema ------------------------------------------------------------------
        case 'customers':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
            }
        
            // Validations
            if(!newEntry.name || !newEntry.email) {
                return res.status(400).json({ msg: 'Please include a name and email' });
            }


        // Partners schema ------------------------------------------------------------------
        case 'partners':
            newEntry = {
                name: req.body.name,
                email: req.body.email,
                company: req.body.company
            }

            // Validations
            if(!newEntry.name || !newEntry.email || !newEntry.company) {
                return res.status(400).json({ msg: 'Please include a name, email, and company'});
            }


        // Comments schema ------------------------------------------------------------------
        case 'comments':
            newEntry = {
                subject: req.body.subject,
                content: req.body.content,
                userId: req.body.userId
            }

            // Validations
            if(!newEntry.subject || !newEntry.content) {
                return res.status(400).json({ msg: 'Please include a subject and body'});
            } else if (newEntry.content.length > 140) {
                return rex.status(400).json({ msg: 'Body must be less than 140 characters' });
            }
    }
    return newEntry;
}

module.exports = data;