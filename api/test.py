from app import app
import unittest


class ApiTestCase(unittest.TestCase):

    def test_api(self):
        tester = app.test_client(self)
        print("=> Testing to see if API responds")
        response = tester.get("/api", content_type="application/json")
        self.assertEqual(response.status_code, 200):


if __name__ == "__main__":
    unittest.main()
