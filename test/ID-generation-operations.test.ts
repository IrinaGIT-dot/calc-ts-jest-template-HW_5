import {estId, ltId, lvId} from "../src/CountryId";

describe('ID generation suite 1', () => {
    test('Verify generated Estonian ID has "EST-" prefix', () => {
            expect(estId().startsWith('EST-')).toBe(true)
        })

    test('Verify generated Estonian ID has 8 symbols', () => {
        expect(estId().length).toBe(8)
    })

    test('Verify generated Estonian ID consists from prefix "EST-" and 4 digits', () => {
        expect(/EST-\d{4}/.test(estId())).toBe(true)
    })
})

describe('ID generation suite 2', () => {
    test('Verify generated Latvian ID has "LVA-" prefix', () => {
        expect(lvId().startsWith('LVA-')).toBe(true)
    })

    test('Verify generated Latvian ID has 8 symbols', () => {
        expect(lvId().length).toBe(8)
    })

    test('Verify generated Latvian ID consists from prefix "LVA" and 4 digits', () => {
        expect(/LVA-\d{4}/.test(lvId())).toBe(true)
    })
})

describe('ID generation suite 3', () => {
    test('Verify generated Lithuanian ID has "LTU-" prefix', () => {
        expect(ltId().startsWith('LTU')).toBe(true)
    })

    test('Verify generated Lithuanian ID has 8 symbols', () => {
        expect(ltId().length).toBe(8)
    })

    test('Verify generated Lithuanian ID consists from prefix "LTU" and 4 digits', () => {
        expect(/LTU-\d{4}/.test(ltId())).toBe(true)
    })
})