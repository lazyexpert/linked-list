const expect = require('chai').expect;

const Node = require('./node');
const LinkedList = require('./index');

describe('App', function() {
  describe('Node', function() {
    describe('constructor', function() {
      it('should correctly create instance', function() {
        const node = new Node(5);

        expect(node.value).to.be.equal(5);
      });
    });
  });
  
  describe('Linked List', function() {
    let list;

    beforeEach(function() {
      list = new LinkedList();
    });

    describe('constructor', function() {
      it('should create empty instance correctly', function() {  
        expect(list.head).to.be.null;
        expect(list.tail).to.be.null;
      });

      it('should create instance with head node correctly', function() {  
        list = new LinkedList(2);
        expect(list.head).not.to.be.null;
        expect(list.head.value).to.be.equal(2);
      });

      it('should create instance with array data correctly', function() {  
        list = new LinkedList([1, 2]);
        expect(list.head).not.to.be.null;
        expect(list.head.value).to.be.equal(1);
        expect(list.tail.value).to.be.equal(2);
      });
    })

    describe('add', function() {
      it('should throw error if null passed as a value', function() {
        try {
          list.add(null);
        } catch(e) {
          return;
        }

        throw new Error('expected to throw');
      });

      it('should add new Nodes to the list', function() {
        const list = new LinkedList();
        list.add(1);
        list.add(2);

        expect(list.head.value).to.be.equal(1);
        expect(list.head.next.value).to.be.equal(2);
      });
    });

    describe('print', function() {
      it('should print the content of the list', function() {
        const expectedData = '# 0 value: 1\n';
        const old = process.stdout.write;
        let data;

        try {
          list.add(1);
  
          process.stdout.write = input => data = input;
  
          list.print();
  
          expect(data).to.deep.equal(expectedData);
        } catch (e) {
          throw e;
        } finally {
          process.stdout.write = old;
        }
      });
    });

    describe('remove', function() {
      it('should return -1 if value not found', function() {
        list.add(1);
        list.add(2);

        const index = list.remove(3);

        expect(index).to.be.equal(-1);
      });

      it('should remove first element correctly', function() {
        list.add(1);
        list.add(2);

        const index = list.remove(1);

        expect(index).to.be.equal(0);
        expect(list.head.value).to.be.equal(2);
      });

      it('should assign head even thorugh several removes', function() {
        list.add(1);
        list.add(2);
        list.add(3);

        list.remove(1);
        list.remove(2);

        expect(list.head.value).to.be.equal(3);
      })

      it('should remove last element correctly', function() {
        list.add(1);
        list.add(2);

        const index = list.remove(2);

        expect(index).to.be.equal(1);
      });

      it('should remove last element correctly', function() {
        list.add(1);
        list.add(2);
        list.add(3);

        list.remove(3);

        expect(list.tail.value).to.be.equal(2);
      });

      it('should remove inner element correctly', function() {
        list.add(1);
        list.add(2);
        list.add(3);

        const index = list.remove(2);

        expect(index).to.be.equal(1);
      });
    });
  });
});
