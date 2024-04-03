let GrossPay = 35000;

// Function to calculate PAYE based on taxable pay
function Paye(taxablePay) {
    if (taxablePay > 0 && taxablePay <= 24000) {
        return 0.1 * taxablePay; 
    } else if (taxablePay > 24000 && taxablePay <= 32333) {
        return 0.25 * taxablePay; 
    } else if (taxablePay > 32333 && taxablePay <= 500000) {
        return 0.3 * taxablePay; 
    } else if (taxablePay > 500000 && taxablePay <= 800000) {
        return 0.325 * taxablePay; 
    } else if (taxablePay > 800000) {
        return 0.35 * taxablePay; 
    }
}

// Function to calculate NHIF contribution based on the  gross pay
function NHIF(Pay) {
    if (Pay > 0 && Pay <= 5999) {
        return 150; 
    } else if (Pay >= 6000 && Pay < 8000) {
        return 300; 
    } else if (Pay >= 8000 && Pay < 12000) {
        return 400; 
    } else if (Pay >= 12000 && Pay < 15000) {
        return 500; 
    } else if (Pay >= 15000 && Pay < 20000) {
        return 600; 
    } else if (Pay >= 20000 && Pay < 25000) {
        return 750; 
    } else if (Pay >= 25000 && Pay < 30000) {
        return 850; 
    } else if (Pay >= 30000 && Pay < 35000) {
        return 900; 
    } else if (Pay >= 35000 && Pay < 40000) {
        return 950; 
    } else if (Pay >= 40000 && Pay < 45000) {
        return 1000; 
    } else if (Pay >= 45000 && Pay < 50000) {
        return 1100; 
    } else if (Pay >= 50000 && Pay < 60000) {
        return 1200; 
    } else if (Pay >= 60000 && Pay < 70000) {
        return 1300; 
    } else if (Pay >= 70000 && Pay < 80000) {
        return 1400; 
    } else if (Pay >= 80000 && Pay < 90000) {
        return 1500; 
    } else if (Pay >= 90000 && Pay < 100000) {
        return 1600; 
    } else {
        return 1700; 
    }
}

// Function to calculate NSSF contribution based on pensionable pay
function NSSF(PensionablePay) {
    if (PensionablePay > 0 && PensionablePay <= 7000) {
        return 0.06 * PensionablePay; 
    } else if (PensionablePay > 7000 && PensionablePay <= 36000) {
        return 0.06 * PensionablePay; 
    } else {
        return 'Tier not found';
    }
}

// Function to calculate taxable income after deducting NSSF and NHIF contributions
function TaxableIncome() {
    return GrossPay - (NSSF(GrossPay) + NHIF(GrossPay));
}

// Function to calculate net salary after deducting PAYE tax from taxable income
function NetSalary() {
    return TaxableIncome() - Paye(TaxableIncome());
}

// Output of the results by printing through console.log
console.log("Gross Pay:", GrossPay);
console.log("NSSF Contribution:", NSSF(GrossPay));
console.log("NHIF Contribution:", NHIF(GrossPay));
console.log("Taxable Income:", TaxableIncome());
console.log("PAYE Deduction:", Paye(TaxableIncome()));
console.log("Net Salary:", NetSalary());