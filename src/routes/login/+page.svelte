<script>
	import { goto } from '$app/navigation';
    import bg from '$lib/assets/bg.webp';
    import { loggedIn } from '../../stores.js';
    let bgStyle = `background-image: url(${bg});`;

    let fullName = '';
    let idNumber = '';
    let positionField = '';

    let loginForm;
    function login() {
        $loggedIn = true;
        goto('/dashboard');
        loginForm.requestSubmit();
    }

    const inputBoxCss = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
</script>

<style>
  .bg-container {
      position: relative;
      width: 100vw;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
  }


  .bg-container::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(219, 215, 215, 0.5);
  }

  .form-container {
      margin-top: 2rem; /* Add space above the form */
      position: relative;
      z-index: 2; /* Ensure the form is above the .bg-container */
  }
  .card-container {
      margin-top: 0; /* Add space above the form */
      position: relative;
      z-index: 2; /* Ensure the form is above the .bg-container */
  }
</style>

<div class="bg-container" style={bgStyle}>
  <div class="background flex flex-col items-center justify-center min-h-screen">
      <div class="mb-20">
          <div class="bg-primary-500 text-center text-white text-2xl font-bold py-2 px-6 rounded-lg card-container">
              Welcome to (LMS Name)!
          </div>
          <div class="bg-tertiary-500 p-6 rounded-lg shadow-lg mt-6 max-w-md w-full form-container">
          <h2 class="text-xl font-semibold mb-4">Please enter your details:</h2>
          <div class="space-y-4" bind:this={loginForm}>
              <input
              type="text"
              placeholder="Full Name..."
              bind:value={fullName}
              class={ inputBoxCss }
              />
              <input
              type="text"
              placeholder="ID Number..."
              bind:value={idNumber}
              class={ inputBoxCss }
              />
              <input
              type="text"
              placeholder="Position Field..."
              bind:value={positionField}
              class={ inputBoxCss }
              />
              <button
              class="w-full bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
              on:click={() => {$loggedIn = true; goto('/dashboard');}}>
              Submit
              </button>
          </div>
          </div>
      </div>
    </div>
</div>