new Vue({
  el: '#root',
  data: {
    contacts: [
  	{
  		name: 'Michele',
  		avatar: 'img/avatar_1.jpg',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Hai portato a spasso il cane?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Ricordati di dargli da mangiare',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 16:15:22',
  				text: 'Tutto fatto!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Fabio',
  		avatar: 'img/avatar_2.jpg',
  		visible: true,
  		messages: [
  			{
  				date: '20/03/2020 16:30:00',
  				text: 'Ciao come stai?',
  				status: 'sent'
  			},
  			{
  				date: '20/03/2020 16:30:55',
  				text: 'Bene grazie! Stasera ci vediamo?',
  				status: 'received'
  			},
  			{
  				date: '20/03/2020 16:35:00',
  				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
  				status: 'sent'
  			}
  		],
  	},
  	{
  		name: 'Samuele',
  		avatar: 'img/avatar_3.jpg',
  		visible: true,
  		messages: [
  			{
  				date: '28/03/2020 10:10:40',
  				text: 'La Marianna va in campagna',
  				status: 'received'
  			},
  			{
  				date: '28/03/2020 10:20:10',
  				text: 'Sicuro di non aver sbagliato chat?',
  				status: 'sent'
  			},
  			{
  				date: '28/03/2020 16:15:22',
  				text: 'Ah scusa!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Luisa',
  		avatar: 'img/avatar_4.jpg',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Lo sai che ha aperto una nuova pizzeria?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Si, ma preferirei andare al cinema',
  				status: 'received'
  			}
  		],
  	},
  ],
  activeChat: 0,
  inputText: ''
},
  methods: {
    changeChat: function(index) {
      this.activeChat = index;
  },
    newText: function () {
      let pushText = this.contacts[this.activeChat].messages;
      let date = new Date();
      let day;
      if(date.getDate() < 10) {
        day = '0' + date.getDate() + '/';
      } else {
        day = date.getDate() + '/';
      }
      let month;
      if(date.getMonth() < 10) {
        month = '0' + (date.getMonth() + 1) + '/';
      } else {
        month = date.getMonth() + 1 + '/';
      }
      let year = date.getFullYear() + ' ';
      let hour = date.getHours() + ':';
      let minutes = date.getMinutes() + ':';
      let seconds = date.getSeconds();
      let completeDate = day+month+year+hour+minutes+seconds;
      if(this.inputText !== '') {
        pushText.push({date: completeDate, text: this.inputText, status: 'sent'});
        this.inputText = '';
        setTimeout(function() {
          pushText.push({date: completeDate, text: 'Ok', status: 'received'})
        }, 1000)
      }
    },
    lastDate: function(index) {
      let messages = this.contacts[index].messages;
      let lastIndex = this.contacts[index].messages.length - 1;
      let lastDate = messages[lastIndex].date;
      return lastDate;
    }
  }
})

Vue.config.devtools = true;
