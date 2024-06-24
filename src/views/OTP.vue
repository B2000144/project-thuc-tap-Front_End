<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="content">
        <h2>Xác Minh Tài Khoản</h2>
        <p>Mã OTP đã được gửi đến địa chỉ email của bạn. Vui lòng nhập mã OTP để xác minh.</p>
        <form @submit.prevent="verifyOtp">
          <input type="text" v-model="code" maxlength="6" placeholder="Nhập mã OTP" required>
          <button type="submit">Xác Minh</button>
          <p v-if="timeRemaining > 0" class="time-remaining">Thời gian còn lại: {{ timeRemainingDisplay }}</p>
        </form>
        <p v-if="showResendMessage" class="resend-message">{{ resendMessage }}</p>
        <p class="resend">Không nhận được mã? <router-link to="/otp/reset">Gửi lại mã</router-link></p>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "@/components/User/layout/AppFooter.vue";
import NavBar from "@/components/User/layout/NavBar.vue";
import AuthService from "@/services/auth.service";

export default {
  name: "otpUser",
  components: {
    AppFooter,
    NavBar,
  },
  data() {
    return {
      email: '',
      code: '',
      otpSentTime: null,
      timeRemaining: 300,
      showResendMessage: false,
      resendMessage: 'Mã OTP mới đã được gửi.'
    };
  },
  computed: {
    timeRemainingDisplay() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  },
  methods: {
    async resetOtp(){
      const response = AuthService.resetOtp(localStorage.getItem('registeredEmail'));
      const message = response;
    },
    async verifyOtp() {
      const currentTime = new Date();
      if (!this.otpSentTime || (currentTime - this.otpSentTime) > 300000) {
        alert('Mã OTP đã hết hạn. Vui lòng gửi lại mã.');
        this.resendOtp();
        return;
      }
      
      try {
        const response = await AuthService.activeOtp(localStorage.getItem('registeredEmail'), this.code);
        const  success  = response;
        console.log (response)
        if (success) {
          alert('Xác minh thành công.');
          //this.otpSentTime = new Date(); // Cập nhật lại thời gian gửi OTP thành công
          this.$router.push( '/login');
    
        }
      } catch (error) {
        console.error('Lỗi khi xác minh OTP:', error);
        alert('Đã xảy ra lỗi trong quá trình xác minh OTP.');
      }
    },
    resendOtp() {
      this.showResendMessage = true;
      this.otpSentTime = new Date();
      this.timeRemaining = 300;
      localStorage.setItem('registeredEmail', this.email);
    },
    updateTimeRemaining() {
      const currentTime = new Date();
      const elapsedTime = Math.floor((currentTime - this.otpSentTime) / 1000);
      this.timeRemaining = Math.max(300 - elapsedTime, 0);
    }
  },
  mounted() {
    const storedEmail = localStorage.getItem('registeredEmail');
    if (storedEmail) {
      this.email = storedEmail;
    }
    
    this.resendOtp();
    setInterval(this.updateTimeRemaining, 1000);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.content {
  margin: 50px 0;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: white;
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

p {
  margin-bottom: 20px;
  color: #666;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

button {
  padding: 15px 30px;
  font-size: 16px;
  background-color: #0072ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #005bb5;
}

.resend {
  margin-top: 20px;
  color: #666;
}

.resend a {
  color: #0072ff;
  text-decoration: none;
}

.resend a:hover {
  text-decoration: underline;
}
</style>
