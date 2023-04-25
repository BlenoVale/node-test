import { Math } from './Math';

describe('Testing Math library', () => {

    beforeEach(()=>{
        //Executa esta função antes de cada teste
    });

    afterEach(()=>{
        //Execute esta função depois de cada teste
    })

    beforeAll(()=>{
        //executa antes todos os teste
    })

    afterAll(()=>{
        // executa depois de todos os testes
    })

    it('should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });

    it('should subtract two numbers correctly', () => {
        const response = Math.sub(4, 2);
        expect(response).toBe(2);
    });

    it('should multiplay two numbers correctly', () => {
        const response = Math.mult(3, 5);
        expect(response).toBe(15);
    });

    it('should divide two numbers correctly', () => {
        const response = Math.div(15, 5);
        expect(response).toBe(3);

        const response2 = Math.div(3, 0);
        expect(response2).toBeFalsy;
    });

    
    it('should divide two numbers correctly', () => {
        const response2 = Math.div(3, 0);
        expect(response2).toThrow(new Error('Não divide por zero.'));
    });

    it('contar quantos caracteres tem na string', () => {
        const response = 'bleno';
        expect(response).toHaveLength(5);
    });

    it('Se possui a propriedade de email', () => {
        const response = { name: 'bleno', email: 'bleno@gmail.com' };

        expect(response).toHaveProperty('email');
    });

    it.only('Se possui a propriedade de email', () => {
        const response = { name: 'bleno', email: 'bleno@gmail.com' };

        expect(response).not.toBeUndefined();
    });
})

