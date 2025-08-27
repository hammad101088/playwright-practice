import { Reporter } from "@playwright/test/reporter";

class MyReporter implements Reporter {
  onTestEnd(test, result) {
    console.log(`🔹 ${test.title} → ${result.status}`);
  }
}

export default MyReporter;
