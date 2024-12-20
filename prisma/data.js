// TODO
/**
 * ! Datos de prueba. Eliminar antes de pasar a producción
 */
export const people = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@admin.com",
    rut: "23.553.450-9",
    password: "admin",
    role: "Admin",
    phone: "56997571019",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "client@client.com",
    rut: "23.552.345-0",
    companyRut: "21.218.720-8",
    password: "client",
    role: "Client",
    phone: "56960526880",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "user@user.com",
    rut: "17.815.510-5",
    password: "user",
    role: "User",
    phone: "56998782651",
  },
  {
    firstName: "Tandie",
    lastName: "Smith",
    email: "temma0@salon.com",
    rut: "20.278.746-0",
    password: "fW7){Dnsj+BFC",
    role: "User",
    phone: "56965188959",
  },
  {
    firstName: "Jareb",
    lastName: "Lachaize",
    email: "jlachaize1@aol.com",
    rut: "12.096.563-8",
    companyRut: "12.203.362-7",
    password: "qA3+<lX8wqAA/",
    role: "Client",
    phone: "56975645328",
  },
  {
    firstName: "Drusilla",
    lastName: "McCarty",
    email: "dmccartyj@pinterest.com",
    rut: "14.556.933-8",
    companyRut: "15.467.547-7",
    password: "qA3+<lX8wqAA/",
    role: "Client",
    phone: "56994526473",
  },
  {
    firstName: "Acme",
    lastName: "Corp",
    email: "contact@acme.com",
    rut: "10.119.416-7",
    companyRut: "11.181.915-7",
    password: "password123",
    role: "Client",
    phone: "56951435128",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    rut: "18.935.902-0",
    password: "password123",
    role: "User",
    phone: "56974300231",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    rut: "16.652.453-9",
    password: "password123",
    role: "Admin",
    phone: "56950120591",
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    rut: "19.474.132-4",
    password: "password123",
    role: "User",
    phone: "56931054978",
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    email: "bob.brown@example.com",
    rut: "15.339.766-K",
    companyRut: "18.718.893-8",
    password: "password123",
    role: "Client",
    phone: "56974986501",
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlie.davis@example.com",
    rut: "18.946.165-8",
    companyRut: "14.016.379-1",
    password: "password123",
    role: "Client",
    phone: "56952471107",
  },
  {
    firstName: "Eve",
    lastName: "White",
    email: "eve.white@example.com",
    rut: "11.436.273-5",
    password: "password123",
    role: "User",
    phone: "56919687306",
  },
  {
    firstName: "Frank",
    lastName: "Green",
    email: "frank.green@example.com",
    rut: "21.348.101-0",
    companyRut: "21.873.523-1",
    password: "password123",
    role: "Client",
    phone: "56930231679",
  },
  {
    firstName: "Grace",
    lastName: "Black",
    email: "grace.black@example.com",
    rut: "20.773.500-0",
    password: "password123",
    role: "User",
    phone: "56959173106",
  },
  {
    firstName: "Hank",
    lastName: "Blue",
    email: "hank.blue@example.com",
    rut: "12.121.212-2",
    companyRut: "24.572.192-7",
    password: "password123",
    role: "Client",
    phone: "56982694946",
  },
  {
    firstName: "Ivy",
    lastName: "Red",
    email: "ivy.red@example.com",
    rut: "24.912.676-4",
    password: "password123",
    role: "User",
    phone: "56963084261",
  },
  {
    firstName: "Jack",
    lastName: "YelBaja",
    email: "jack.yelBaja@example.com",
    rut: "18.506.458-1",
    companyRut: "24.489.466-6",
    password: "password123",
    role: "Client",
    phone: "56951610387",
  },
  {
    firstName: "Kara",
    lastName: "Purple",
    email: "kara.purple@example.com",
    rut: "22.133.546-5",
    password: "password123",
    role: "User",
    phone: "56931621749",
  },
  {
    firstName: "Leo",
    lastName: "Orange",
    email: "leo.orange@example.com",
    rut: "18.290.627-1",
    companyRut: "23.475.163-8",
    password: "password123",
    role: "Client",
    phone: "56972898652",
  },
  {
    firstName: "Camilo",
    lastName: "Bravo",
    email: "camilo.bravo@example.com",
    rut: "21.048.333-0",
    companyRut: "16.232.286-9",
    password: "camilobravo",
    role: "Client",
    phone: "56964141801",
  },
];

export const tickets = [
  {
    title: "Veniam ea velit sunt ea nulla.",
    description:
      "Culpa occaecat cillum eu amet pariatur fugiat occaecat mollit et consectetur labore qui labore Lorem minim pariatur eiusmod non dolor aliquip.",
    type: "Bug",
    priority: "Media",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-01-15"),
  },
  {
    title: "Anim duis est nulla ullamco.",
    description:
      "Elit sint fugiat ea aute nostrud ad nisi nostrud commodo incididunt officia officia magna amet in id culpa sit id velit incididunt.",
    type: "Pregunta",
    priority: "Baja",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-02-20"),
  },
  {
    title: "Esse est reprehenderit incididunt.",
    description:
      "Ut nisi nulla magna adipisicing tempor id et officia ullamco ex minim ipsum culpa eiusmod ex pariatur dolore labore anim nostrud esse.",
    type: "Característica",
    priority: "Media",
    status: "Abierto",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2023-03-10"),
  },
  {
    title: "Amet minim dolor aute consequat.",
    description:
      "Ea qui elit commodo ea sit sit ipsum esse esse proident eiusmod veniam eu mollit sint sit incididunt irure adipisicing veniam fugiat.",
    type: "Pregunta",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2023-04-05"),
  },
  {
    title: "Sit cupidatat quis mollit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-05-01"),
  },
  {
    title: "Tempor amet do consectetur mollit dolor.",
    description:
      "Officia id magna ullamco minim qui cupidatat Lorem laboris voluptate est nisi occaecat officia pariatur ullamco occaecat ullamco do excepteur labore sunt quis adipisicing nulla qui reprehenderit duis eiusmod.",
    type: "Bug",
    priority: "Media",
    status: "Abierto",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2023-06-10"),
  },
  {
    title: "Deserunt duis duis ut aliqua exercitation.",
    description:
      "Ullamco incididunt quis ex irure dolore sint esse reprehenderit sint adipisicing consectetur non est non nostrud aute dolore culpa dolor.",
    type: "Bug",
    priority: "Media",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-07-15"),
  },
  {
    title: "Id ea occaecat cillum.",
    description:
      "Commodo aute esse velit minim ullamco dolore ad id cupidatat amet fugiat quis eiusmod occaecat ut nulla mollit aute ea non deserunt magna sint anim ullamco nisi ad laborum pariatur.",
    type: "Pregunta",
    priority: "Alta",
    status: "En progreso",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2023-08-20"),
  },
  {
    title: "Occaecat laboris ut minim.",
    description:
      "Minim exercitation voluptate reprehenderit laborum qui id officia nostrud occaecat amet magna veniam Lorem veniam esse incididunt et commodo est id excepteur.",
    type: "Pregunta",
    priority: "Media",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-09-25"),
  },
  {
    title: "Magna commodo sit sint.",
    description:
      "Eiusmod cillum culpa nostrud enim aliqua labore sint eu sit magna velit amet est commodo est est sunt incididunt et anim proident officia dolor fugiat aliquip.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-10-01"),
  },
  {
    title: "Aliquip cupidatat et sit.",
    description:
      "Sint aliquip officia amet reprehenderit veniam minim sit laborum excepteur est duis dolore proident ipsum id ut quis culpa elit cupidatat eiusmod elit.",
    type: "Pregunta",
    priority: "Alta",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2023-11-05"),
  },
  {
    title: "Laboris nisi ut aliquip ex ea commodo.",
    description:
      "Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    type: "Característica",
    priority: "Baja",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2023-12-01"),
  },
  {
    title: "Excepteur sint occaecat cupidatat non proident.",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "Bug",
    priority: "Media",
    status: "Cerrado",
    userId: 4, // Asignado a Tandie
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2023-12-15"),
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus.",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    type: "Pregunta",
    priority: "Alta",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-01-10"),
  },
  {
    title: "Nemo enim ipsam voluptatem quia voluptas.",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    type: "Característica",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-01-20"),
  },
  {
    title: "Neque porro quisquam est qui dolorem.",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-02-05"),
  },
  {
    title: "Ut enim ad minima veniam.",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    type: "Pregunta",
    priority: "Baja",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-02-15"),
  },
  {
    title: "Quis autem vel eum iure reprehenderit.",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    type: "Característica",
    priority: "Media",
    status: "En progreso",
    userId: null, // No asignado
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-03-01"),
  },
  {
    title: "At vero eos et accusamus et iusto odio.",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    type: "Bug",
    priority: "Alta",
    status: "Cerrado",
    userId: 4, // Asignado a Tandie
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-03-10"),
  },
  {
    title: "Similique sunt in culpa qui officia deserunt.",
    description:
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    type: "Pregunta",
    priority: "Baja",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-04-05"),
  },
  {
    title: "Nam libero tempore, cum soluta nobis est.",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    type: "Característica",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-04-15"),
  },
  {
    title: "Temporibus autem quibusdam et aut officiis.",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-05-01"),
  },
  {
    title: "Itaque earum rerum hic tenetur a sapiente.",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    type: "Pregunta",
    priority: "Baja",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-05-10"),
  },
  {
    title: "Ut enim ad minima veniam.",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    type: "Característica",
    priority: "Media",
    status: "En progreso",
    userId: null, // No asignado
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-06-01"),
  },
  {
    title: "Quis autem vel eum iure reprehenderit.",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    type: "Bug",
    priority: "Alta",
    status: "Cerrado",
    userId: 4, // Asignado a Tandie
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-06-10"),
  },
  {
    title: "At vero eos et accusamus et iusto odio.",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    type: "Pregunta",
    priority: "Baja",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-07-05"),
  },
  {
    title: "Similique sunt in culpa qui officia deserunt.",
    description:
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    type: "Característica",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-07-15"),
  },
  {
    title: "Nam libero tempore, cum soluta nobis est.",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-08-01"),
  },
  {
    title: "Temporibus autem quibusdam et aut officiis.",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    type: "Pregunta",
    priority: "Baja",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-08-10"),
  },
  {
    title: "Itaque earum rerum hic tenetur a sapiente.",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    type: "Característica",
    priority: "Media",
    status: "En progreso",
    userId: null, // No asignado
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-09-01"),
  },
  {
    title: "Ut enim ad minima veniam.",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    type: "Bug",
    priority: "Alta",
    status: "Cerrado",
    userId: 4, // Asignado a Tandie
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-09-10"),
  },
  {
    title: "Quis autem vel eum iure reprehenderit.",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    type: "Pregunta",
    priority: "Baja",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-10-05"),
  },
  {
    title: "At vero eos et accusamus et iusto odio.",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    type: "Característica",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-10-15"),
  },
  {
    title: "Similique sunt in culpa qui officia deserunt.",
    description:
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-11-01"),
  },
  {
    title: "Nam libero tempore, cum soluta nobis est.",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    type: "Pregunta",
    priority: "Baja",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-11-10"),
  },
  {
    title: "Temporibus autem quibusdam et aut officiis.",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    type: "Característica",
    priority: "Media",
    status: "En progreso",
    userId: null, // No asignado
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2024-12-01"),
  },
  {
    title: "Itaque earum rerum hic tenetur a sapiente.",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    type: "Bug",
    priority: "Alta",
    status: "Cerrado",
    userId: 4, // Asignado a Tandie
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2024-12-10"),
  },
  {
    title: "Ut enim ad minima veniam.",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    type: "Pregunta",
    priority: "Baja",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2025-01-05"),
  },
  {
    title: "Quis autem vel eum iure reprehenderit.",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    type: "Característica",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2025-01-15"),
  },
  {
    title: "At vero eos et accusamus et iusto odio.",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2025-02-01"),
  },
  {
    title: "Similique sunt in culpa qui officia deserunt.",
    description:
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    type: "Pregunta",
    priority: "Baja",
    status: "Cerrado",
    userId: 3, // Asignado a Jane Doe
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2025-02-10"),
  },
  {
    title: "Nam libero tempore, cum soluta nobis est.",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    type: "Característica",
    priority: "Media",
    status: "En progreso",
    userId: null, // No asignado
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2025-03-01"),
  },
  {
    title: "Temporibus autem quibusdam et aut officiis.",
    description:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    type: "Bug",
    priority: "Alta",
    status: "Cerrado",
    userId: 4, // Asignado a Tandie
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2025-03-10"),
  },
  {
    title: "Itaque earum rerum hic tenetur a sapiente.",
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    type: "Pregunta",
    priority: "Baja",
    status: "Abierto",
    userId: 3, // Asignado a Jane Doe
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2025-04-05"),
  },
  {
    title: "Ut enim ad minima veniam.",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    type: "Característica",
    priority: "Media",
    status: "Cerrado",
    userId: null, // No asignado
    clientId: 5, // Cliente Jareb
    createdAt: new Date("2025-04-15"),
  },
  {
    title: "Quis autem vel eum iure reprehenderit.",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    type: "Bug",
    priority: "Alta",
    status: "En progreso",
    userId: 4, // Asignado a Tandie
    clientId: 2, // Cliente John Doe
    createdAt: new Date("2025-05-01"),
  },
];
