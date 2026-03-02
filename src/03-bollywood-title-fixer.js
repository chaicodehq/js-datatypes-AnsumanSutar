/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // ✅ Validation
  if (typeof title !== "string") return "";
  const trimmed = title.trim();
  if (trimmed.length === 0) return "";

  // ✅ Normalize spaces (replace multiple spaces with single space)
  const words = trimmed.replace(/\s+/g, " ").split(" ");

  // ✅ Exception words (small words usually lowercase in titles)
  const exceptions = ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];

  // ✅ Map each word to Title Case with exceptions
  const fixedWords = words.map((word, index) => {
    const lower = word.toLowerCase();
    if (index !== 0 && exceptions.includes(lower)) {
      return lower; // keep lowercase if not the first word
    }
    // Capitalize first letter, rest lowercase
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  // ✅ Join back into a single string
  return fixedWords.join(" ");

}
