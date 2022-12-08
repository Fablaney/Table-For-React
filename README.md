# This is an Table React Plugin

# He Require props :

# columns : the columns
    const columns = [
        { title: 'FirstName', label: 'First Name' },
        .....
    ]
    The search and sort in colums is based on the title

    Title must be the same ad the data key "columns.FirstName === datas.FirstName"

    And the label is the text on the column header

# rows : your datas for exemple
    const datas = [
    {
        FirstName: 'Julie',
        LastName: 'Perarnau',
        BirthDate: '07/08/1989',
        StartDate: '01/09/1992',
        Street: '7 Route de Dammartin',
        City: 'Eugene',
        State: 'OR',
        Zipcode: 80123,
        Department: 'Marketing'
    },
    .....
    ]

# lines ( optionnal ) : 
the number of lines per pages, by default lines is [10, 25, 50, 100], and you can send a table with [10,20, 30,40]