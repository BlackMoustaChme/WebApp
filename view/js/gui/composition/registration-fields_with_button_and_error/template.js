console.log('Log:Exporting template for login-fields');

export default function() {return `  
    <text-field>Username: </text-field>
    <text-field>Last name: </text-field>
    <text-field>Name: </text-field>
    <text-field>Middle name: </text-field>
    <password-field>Password: </password-field>
    <password-field>Repeat password: </password-field>
    <my-button>Register</my-button>
    <error-span></error-span>
`}