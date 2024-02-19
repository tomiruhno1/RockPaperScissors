function generateRandomPassword(length) {
    // Define character sets for different types of characters
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';
  
    // Combine all character sets based on your requirements
    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
  
    let password = '';
    
    // Generate a random password by selecting random characters from the combined set
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  // Example usage to generate a random password of length 12
  const randomPassword = generateRandomPassword(12);
  console.log(randomPassword);
  