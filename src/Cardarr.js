const userInfo = (text) => [
  { id: 1, label: "Name", value: text.text },
  { id: 2, label: "Last Name", value: text.lastName },
  { id: 3, label: "Email", value: text.email },
  { id: 4, label: "Password", value: text.password },
];

export default userInfo;