import axios from 'axios';

const URL = 'http://localhost:3005/health';

async function testThrottle() {
  const requests = Array.from({ length: 120 }, (_, index) =>
    axios
      .get(URL)
      .then(() => ({
        request: index + 1,
        status: 200,
      }))
      .catch((error) => ({
        request: index + 1,
        status: error.response?.status,
      })),
  );

  const results = await Promise.all(requests);

  const success = results.filter((r) => r.status === 200).length;
  const throttled = results.filter((r) => r.status === 429).length;

  console.log(`✅ Success: ${success}`);
  console.log(`🚫 Throttled: ${throttled}`);

  console.table(results.filter((r) => r.status !== 200));
}

void testThrottle();
