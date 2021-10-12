<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  /* Let's get this party started */
  ::-webkit-scrollbar {
      width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
      -webkit-border-radius: 10px;
      border-radius: 10px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background: #818df8fa; 
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background: #818df88a; 
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  button {
    @apply focus:outline-none;
  }
  
  input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

</style>
