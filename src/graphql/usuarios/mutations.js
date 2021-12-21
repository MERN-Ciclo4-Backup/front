import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario($_id: String!, $body: UsuarioInput!) {
  editarUsuario(_id: $_id, body: $body) {
    _id
    nombre
    apellido
    identificacion
    correo
    estado
    rol
  }
}
`;
// const EDITAR_USUARIO = gql`
//   mutation EditarUsuario(
//     $_id: String!
//     $nombre: String!
//     $apellido: String!
//     $identificacion: String!
//     $correo: String!
//     $estado: Enum_EstadoUsuario!
//   ) {
//     editarUsuario(
//       _id: $_id
//       nombre: $nombre
//       apellido: $apellido
//       identificacion: $identificacion
//       correo: $correo
//       estado: $estado
//     ) {
//       _id
//       nombre
//       apellido
//       correo
//       estado
//       identificacion
//       rol
//     }
//   }
// `;

export { EDITAR_USUARIO };
