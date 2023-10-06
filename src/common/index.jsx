const Constants = {
 screens: {
  Login: 'Login',
  Home: 'Home',
  AssignedVisits: 'AssignedVisits',
  VisitForm: 'VisitForm',
  LegalizeForm: 'LegalizeForm',
  VisitDetails: 'VisitDetails',
  VisitInfo: 'VisitInfo',
 },
 language: {
  generic: {
   next: 'Siguiente',
   login: 'INICIAR SESION',
   accept: 'Aceptar',
   sorry: 'Lo sentimos',
   nodata: 'Por favor llena todos los campos',
  },
  screensText: {
   login: {
    rejected: 'Tus credenciales son invalidas',
   },
   assignedVisits: {
    modalTitle: 'Reporte de soporte',
    legalize: 'LEGALIZAR',
   },
  },
 },
};
const Theme = {
 colors: {
  mainOrange: '#e37427',
  navbarOrange: '#e99c67',
 },
 shimmerColors: ['#F5F9FF', '#ECEBEB', '#fff', '#F8F9FA'],
};
export { Constants, Theme };
