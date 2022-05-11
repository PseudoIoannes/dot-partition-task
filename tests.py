import unittest
from task import dot_partition


class TestDotPartition(unittest.TestCase):
    def test_simple_answer(self):
        answer = ['abcd', 'a.bcd', 'ab.cd', 'abc.d', 'a.b.cd', 'a.bc.d', 'ab.c.d', 'a.b.c.d']
        self.assertEqual(dot_partition("abcd"), answer)

unittest.main()