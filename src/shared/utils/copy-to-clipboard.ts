export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to copy text to clipboard:", error);
  }
};
