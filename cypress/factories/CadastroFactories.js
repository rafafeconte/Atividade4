
import { faker } from '@faker-js/faker/locale/pt_BR';

export default {

    cadastro: function() {
      var mensagemRequiredFlied = 'This is a required field.'
      var mensagemTanks = 'Thank you for registering with Main Website Store.'
      var incorrectPassword = 'Please enter the same value again.'
      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()
      
      var dados = {
          first: firstName,
          last: lastName,
          email: faker.internet.email(firstName),
          emailNilay: faker.internet.email('nilay_conte'),
          password: '134679rA',
          mensagem: mensagemTanks,
          requiredFlied: mensagemRequiredFlied,
          passwordIncorrect: incorrectPassword

          
      }
      return dados
    }
}